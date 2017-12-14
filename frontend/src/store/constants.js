export const AUTH_SIGNIN = 'charibin/auth/signin'
export const AUTH_SIGNOUT = 'charibin/auth/signout'
export const AUTH_SIGNUP = 'charibin/auth/signup'
export const AUTH_SIGNUP_WITH_FACEBOOK = 'charibin/auth/signup-with-facebook'
export const AUTH_VERIFY_SIGNUP = 'charibin/auth/verify-signup'
export const AUTH_VERIFY_SIGNUP_RESET = 'charibin/auth/verify-signup-reset'
export const AUTH_CURRENT_USER = 'charibin/auth/current-user'
export const AUTH_CURRENT_USER_UPDATE = 'charibin/auth/current-user/update'
export const AUTH_CURRENT_USER_AVATAR_UPLOAD = 'charibin/auth/current-user-avatar/upload'
export const AUTH_PASSWORD_UPDATE = 'charibin/auth/password-update'

export const ADMIN_GET_CHARITY_LIST = 'charibin/admin/get-charity-list'
export const ADMIN_CREATE_CHARITY = 'charibin/admin/create-charity'
export const ADMIN_GET_CHARITY_DETAIL = 'charibin/admin/get-charity-detail'
export const ADMIN_UPDATE_CHARITY_DETAIL = 'charibin/admin/update-charity-detail'
export const ADMIN_UPLOAD_CHARITY_LOGO = 'charibin/admin/upload-charity-logo'
export const ADMIN_DELETE_CHARITY = 'charibin/admin/delete-charity'

export const ADMIN_GET_DONOR_LIST = 'charibin/admin/get-donor-list'
export const ADMIN_CREATE_DONOR = 'charibin/admin/create-donor'
export const ADMIN_GET_DONOR_DETAIL = 'charibin/admin/get-donor-detail'
export const ADMIN_UPDATE_DONOR_DETAIL = 'charibin/admin/update-donor-detail'
export const ADMIN_DELETE_DONOR = 'charibin/admin/delete-donor'
export const ADMIN_GET_DONOR_PRODUCT_LIST = 'charibin/admin/get-donor-product-list'
export const ADMIN_UPLOAD_DONOR_MEDIUM = 'charibin/admin/upload-donor-medium'
export const ADMIN_DELETE_DONOR_MEDIUM = 'charibin/admin/delete-donor-medium'
export const ADMIN_REORDER_DONOR_MEDIUM = 'charibin/admin/reorder-donor-medium'

export const ADMIN_GET_PRODUCT_LIST = 'charibin/admin/get-product-list'
export const ADMIN_CREATE_PRODUCT = 'charibin/admin/create-product'
export const ADMIN_GET_PRODUCT_DETAIL = 'charibin/admin/get-product-detail'
export const ADMIN_UPDATE_PRODUCT_DETAIL = 'charibin/admin/update-product-detail'
export const ADMIN_DELETE_PRODUCT = 'charibin/admin/delete-product'
export const ADMIN_UPLOAD_PRODUCT_MEDIUM = 'charibin/admin/upload-product-medium'
export const ADMIN_DELETE_PRODUCT_MEDIUM = 'charibin/admin/delete-product-medium'
export const ADMIN_REORDER_PRODUCT_MEDIUM = 'charibin/admin/reorder-product-medium'
export const ADMIN_GET_PRODUCT_DONOR_CHARITY_LIST = 'charibin/admin/get-auction-product-donor-charity-list'

export const ADMIN_GET_AUCTION_LIST = 'charibin/admin/get-auction-list'
export const ADMIN_CREATE_AUCTION = 'charibin/admin/create-auction'
export const ADMIN_GET_AUCTION_DETAIL = 'charibin/admin/get-auction-detail'
export const ADMIN_UPDATE_AUCTION_DETAIL = 'charibin/admin/update-auction-detail'
export const ADMIN_START_AUCTION = 'charibin/admin/start-auction'
export const ADMIN_FINISH_AUCTION = 'charibin/admin/finish-auction'
export const ADMIN_CANCEL_AUCTION = 'charibin/admin/cancel-auction'
export const ADMIN_GET_AUCTION_BID_LIST_PAGE = 'charibin/admin/get-auction-bid-list-page'
export const ADMIN_AUCTION_CHANGE_BID_STATUS = 'charibin/admin/auction-change-bid-status'
export const ADMIN_GET_AUCTION_BACKLOG = 'charibin/admin/get-auction-backlog'

export const ADMIN_GET_SALE_LIST = 'charibin/admin/get-sale-list'
export const ADMIN_GET_SALE_DETAIL = 'charibin/admin/get-sale-detail'
export const ADMIN_UPDATE_SALE = 'charibin/admin/update-sale'
export const ADMIN_SET_SALE_NOTE = 'charibin/admin/set-sale-note'

export const ADMIN_GET_POST_LIST = 'charibin/admin/get-post-list'
export const ADMIN_GET_POST_DETAIL = 'charibin/admin/get-post-detail'
export const ADMIN_CREATE_POST = 'charibin/admin/create-post'
export const ADMIN_UPDATE_POST = 'charibin/admin/update-post'

export const ADMIN_GET_TAG_SUGGESTIONS = 'charibin/admin/get-tag-suggestions'

export const ADMIN_GET_USER_LIST = 'charibin/admin/get-user-list'
export const ADMIN_BLOCK_UNBLOCK_USER = 'charibin/admin/block-unblock-user'
export const ADMIN_GET_USER_HISTORY = 'charibin/admin/get-user-history'

export const ADMIN_GET_MEDIUM_LIST_PAGE = 'charibin/admin/get-medium-list'

export const ADMIN_ADD_NOTIFICATION = 'charibin/admin/add-notification'
export const ADMIN_RESET_NOTIFICATION_UNREAD_COUNT = 'charibin/admin/reset-notification-unread-count'
export const ADMIN_GET_NOTIFICATION_LIST_ON_MENU = 'charibin/admin/get-notification-list-on-menu'
export const ADMIN_GET_NOTIFICATION_PAGE = 'charibin/admin/get-notification-page'

export const ACCOUNT_GET_MY_BIDS = 'charibin/account/get-my-bids'
export const ACCOUNT_DELETE_MY_BID = 'charibin/account/delete-my-bid'

export const AUCTION_GET_LIST = 'charibin/auctions/get-list'
export const AUCTION_GET_DETAIL = 'charibin/auctions/get-detail'
export const AUCTION_GET_TRENDING_LIST = 'charibin/auctions/get-trending-list'
export const AUCTION_PLACE_BID = 'charibin/auctions/place-bid'

export const DONOR_GET_FRONT_LIST = 'charibin/donors/get-front-list'
export const DONOR_GET_LIST_PAGE = 'charibin/donors/get-list-page'
export const DONOR_GET_DETAIL = 'charibin/donors/get-detail'

export const BLOG_GET_POST_FRONT_LIST = 'charibin/blog/get-post-front-list'
export const BLOG_GET_POST_LIST_PAGE = 'charibin/blog/get-post-list-page'
export const BLOG_GET_POST_DETAIL = 'charibin/blog/get-post-detail'
export const BLOG_GET_POST_COMMENT_LIST = 'charibin/blog/get-post-comment-list'
export const BLOG_CREATE_POST_COMMENT = 'charibin/blog/create-post-comment'

export const JOB_GET_LIST = 'charibin/jobs/get-list'
export const JOB_GET_DETAIL = 'charibin/jobs/get-detail'

export const SETTINGS_GET_COUNTRIES = 'charibin/settings/countries'

export const ACCOUNT_SET_PAYMENT = 'charibin/account/set-payment'
export const PAYMENT_TEST = 'charibin/payment/test'
