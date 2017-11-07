import React, { PureComponent } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

import Spinner from 'components/Spinner'
import Uploader from 'components/Uploader'
import CharityForm from 'components/CharityForm'
import {
  getCharityDetail,
  updateCharityDetail,
  uploadCharityLogo,
} from 'store/modules/admin/charities'
import { adminCharitiesSelector } from 'store/selectors'


class AdminCharityDetail extends PureComponent {

  static propTypes = {
    adminCharities: ImmutablePropTypes.map.isRequired,
    getCharityDetail: PropTypes.func.isRequired,
    updateCharityDetail: PropTypes.func.isRequired,
    uploadCharityLogo: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  }

  state = {
    loadingStatus: 1,
    updatingStatus: 0,
  }

  handleSubmit = (data) => {
    this.setState({
      updatingStatus: 1
    })

    this.props.updateCharityDetail({
      id: this.props.match.params.id,
      data,
      success: this.handleBack,
      fail: () => this.setState({
        updatingStatus: -1
      }),
    })
  }

  handleBack = () => this.props.history.push({
    pathname: '/admin/charities'
  })

  renderMediaDropzone = () => {
    const { adminCharities } = this.props
    const charityDetail = adminCharities.get('charityDetail')

    return (
      <div className="mb-4">
        <label>Upload logo here:</label>
        <Uploader
          uploadAction={this.props.uploadCharityLogo}
          uploadActionParams={{ id: this.props.match.params.id }}
          defaultImageURL={charityDetail.get('logo')}
        />
      </div>
    )
  }

  componentWillMount() {
    this.setState({
      loadingStatus: 1
    })

    this.props.getCharityDetail({
      id: this.props.match.params.id,
      success: () => this.setState({
        loadingStatus: 10
      }),
      fail: () => this.setState({
        loadingStatus: -1
      }),
    })
  }

  render() {
    const { adminCharities } = this.props
    const charityDetail = adminCharities.get('charityDetail')
    const { loadingStatus, updatingStatus } = this.state

    if (loadingStatus === -1) {
      return (
        <div>
          <h2>Charity not found</h2>
        </div>
      )
    }

    return (
      <div>
        <div>
          <h3 className="mb-5">Edit Charity</h3>

          {(loadingStatus === 1 || !charityDetail) && <Spinner />}

          {loadingStatus === 10 && charityDetail && <div>
            {updatingStatus === -1 && <div className="mb-2 text-danger">
              Failed to update charity
            </div>}
            
            <CharityForm
              initialValues={charityDetail.delete('pk')}
              disabled={updatingStatus === 1}
              renderMediaDropzone={this.renderMediaDropzone}
              onSubmit={this.handleSubmit}
              onBack={this.handleBack}
            />
          </div>}
        </div>
      </div>
    )
  }
}

const selector = createStructuredSelector({
  adminCharities: adminCharitiesSelector,
})

const actions = {
  getCharityDetail,
  updateCharityDetail,
  uploadCharityLogo,
}

export default compose(
  connect(selector, actions)
)(AdminCharityDetail)
