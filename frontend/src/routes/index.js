import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

// Front pages
import Home from 'pages/Home'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import SignUpWithFacebook from 'pages/SignUpWithFacebook'
import SignUpVerification from 'pages/SignUpVerification'
import AccountSettings from 'pages/AccountSettings'
import Donors from 'pages/Donors'
import DonorDetail from 'pages/DonorDetail'
import Faqs from 'pages/Faqs'
import PrivacyPolicy from 'pages/PrivacyPolicy'

// Admin pages
import AdminAuthenticating from 'pages/AdminAuthenticating'
import AdminIndex from 'pages/AdminIndex'
import AdminCharityList from 'pages/AdminCharityList'
import AdminCharityCreate from 'pages/AdminCharityCreate'
import AdminCharityDetail from 'pages/AdminCharityDetail'
import AdminDonorList from 'pages/AdminDonorList'
import AdminDonorCreate from 'pages/AdminDonorCreate'
import AdminDonorDetail from 'pages/AdminDonorDetail'
import AdminDonorProductList from 'pages/AdminDonorProductList'
import AdminProductList from 'pages/AdminProductList'
import AdminProductCreate from 'pages/AdminProductCreate'
import AdminProductDetail from 'pages/AdminProductDetail'
import AdminAuctionList from 'pages/AdminAuctionList'
import AdminAuctionCreate from 'pages/AdminAuctionCreate'
import AdminAuctionDetail from 'pages/AdminAuctionDetail'
import AdminAuctionStart from 'pages/AdminAuctionStart'
import AdminUserList from 'pages/AdminUserList'
import AdminMediumList from 'pages/AdminMediumList'

// Auth wrappers
import {
  userIsAuthenticated,
  userIsNotAuthenticated,
  currentUserNotLoadedForAdmin,
  userIsAdmin,
} from './auth-wrapper'


const AdminRoutes = props => (
  <div>
    <Route exact path="/admin" component={AdminIndex} />
    <Route exact path="/admin/charities" component={AdminCharityList} />
    <Route exact path="/admin/charities/create" component={AdminCharityCreate} />
    <Route exact path="/admin/charities/:id(\d+)" component={AdminCharityDetail} />
    <Route exact path="/admin/donors" component={AdminDonorList} />
    <Route exact path="/admin/donors/create" component={AdminDonorCreate} />
    <Route exact path="/admin/donors/:id(\d+)" component={AdminDonorDetail} />
    <Route exact path="/admin/donors/:id(\d+)/products" component={AdminDonorProductList} />
    <Route exact path="/admin/products" component={AdminProductList} />
    <Route exact path="/admin/products/create" component={AdminProductCreate} />
    <Route exact path="/admin/products/:id(\d+)" component={AdminProductDetail} />
    <Route exact path="/admin/auctions" component={AdminAuctionList} />
    <Route exact path="/admin/auctions/create" component={AdminAuctionCreate} />
    <Route exact path="/admin/auctions/:id(\d+)" component={AdminAuctionDetail} />
    <Route exact path="/admin/auctions/:id(\d+)/start" component={AdminAuctionStart} />
    <Route exact path="/admin/users" component={AdminUserList} />
    <Route exact path="/admin/media" component={AdminMediumList} />
  </div>
)

const Routes = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={userIsNotAuthenticated(SignIn)} />
      <Route exact path="/signup" component={userIsNotAuthenticated(SignUp)} />
      <Route exact path="/signup-with-facebook/:access_token" component={userIsNotAuthenticated(SignUpWithFacebook)} />
      <Route exact path="/verify-account/:token" component={SignUpVerification} />
      <Route exact path="/account-settings" component={userIsAuthenticated(AccountSettings)} />
      <Route exact path="/donors" component={Donors} />
      <Route exact path="/donors/:id" component={DonorDetail} />

      <Route exact path="/admin-authenticating" component={userIsAuthenticated(currentUserNotLoadedForAdmin(AdminAuthenticating))} />
      <Route path="/admin" component={userIsAdmin(AdminRoutes)} />

      <Route exact path="/faqs" component={Faqs} />
      <Route exact path="/privacy-policy" component={PrivacyPolicy} />
    </div>
  </ConnectedRouter>
)

export default Routes
