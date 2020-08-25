import { Dimensions } from 'react-native';
import ENV from './Environment';

const APP_CONSTANTS = {
  URLS: {
    signUp: `${ENV.API_HOST}/signup`,
    login: `${ENV.API_HOST}/signin`,
    location: `${ENV.API_HOST}/location/getall`,
    userDetails: `${ENV.API_HOST}/user/getbyusername`,
    updateUserProfile: `${ENV.API_HOST}/user/updatebyusername`,
    addAddress: `${ENV.API_HOST}/address/addadressbyusername`,
    updateAddress: `${ENV.API_HOST}/address/updatebyid`,
    bookingDetails: `${ENV.API_HOST}/booking/getbyusername`,
    updateProfessionalDetails: `${ENV.API_HOST}/user/updateuserprofessionaldetails`,
    getAllAddress: `${ENV.API_HOST}/address/getbyusername`,
    getOccupation: `${ENV.API_HOST}/occupation/getall`
  },
  APP_MESSAGES: {
    NOINTERNET: 'You are disconnected! Please connect to Internet',
    EDITPROFILE: 'To edit, please go to the My Profile screen',
    NODATA: 'No data found',
    EMP_WELCOME: 'Welcome to your dashboard. No recent bookings found!',
    WEB_SERVICE_ERR_MESSAGE: 'No network connection could be found',
    NODOCUMENTSMESSAGE: 'No Documents Found',
  },
  IMAGES: {
    iconDrawerHome: require('../../assets/images/drawer/home.png'),
    iconTabHome: require('../../assets/images/tabbar/home.png'),
    iconWallet: require('../../assets/images/drawer/wallet-outline.png'),
    iconArchitect: require('../../assets/icons/architect.png'),
    iconCivil: require('../../assets/icons/engineer.png'),
    iconMason: require('../../assets/icons/mason.png'),
    iconCarpenter: require('../../assets/icons/carpenter.png'),
    iconElectrician: require('../../assets/icons/electrician.png'),
    iconPlumber: require('../../assets/icons/plumber.png'),
    iconPainter: require('../../assets/icons/painter.png'),
    iconWelder: require('../../assets/icons/welder.png'),
    iconTiles: require('../../assets/icons/tiles.png'),
    iconHomeDecor: require('../../assets/icons/homeDecor.png'),
    iconSettings: require('../../assets/images/drawer/settings.png'),
    iconLogin: require('../../assets/icons/login.png'),
    iconLogout: require('../../assets/icons/iconLogout.png'),
    iconSignup: require('../../assets/icons/signup.png'),
    iconUser: require('../../assets/images/drawer/user.png'),
    avatar: require('../../assets/images/RNS_nerd.png'),
    iconMenu: require('../../assets/images/drawer/menu.png'),
    background: require('../../assets/images/background.png'),
    headerBackground: require('../../assets/images/topBarBg.png'),
    arrowBack: require('../../assets/images/icons/arrow-back.png'),
    loginIcon: require('../../assets/icons/loginIcon.jpeg'),
    cameraIcon: require('../../assets/icons/camera.png'),
    regIcon: require('../../assets/icons/loginIcon.jpeg'),
    iconDrawerBooking: require('../../assets/images/drawer/bookings.png'),
    iconTabBooking: require('../../assets/images/tabbar/bookings.png')
  },
  RegisterForm: {
    name: 'Name',
    nameError: 'Please add a valid name',
    age: 'Age',
    ageError: 'Please add a valid age',
    password: 'Password',
    passwordError: 'Please add a valid password',
    mobile: 'Mobile Phone',
    mobileError: 'Please add a valid mobile phone',
    date: 'Date of Birth',
    dateError: 'Please add a valid date of birth',
    email: 'Email',
    emailError: 'Please add a valid email address',
    send: 'Register',
  },
  SCREENS_NAMES: {
    HOME: 'Home Screen',
    PROFILE: 'Profile Screen',
    EMP_DASHBOARD: 'Employee Dashboard',
    LOGIN: 'Login',
    SIGNUP: 'Register',
    BOOKING_DETAILS: 'Booking Details',
  },
  DEVICE_DIMENSIONS: {
    SCREENHEIGHT: Dimensions.get('window').height,
    SCREENWIDTH: Dimensions.get('window').width,
  },
  BUTTON_TEXT: {
    SUBMIT: 'Submit',
    LOGIN: 'Login',
    RESEND: 'Resend',
    REGISTERBUTTON: 'Register',
    EDIT: 'EDIT',
    LOGOUT: 'Log out',
    GO: 'Go',
    CANCEL: 'Cancel',
    ADDIMAGE: 'Add Image',
    DELETEIMAGE: 'Delete Image',
    BOOKED: 'BOOKED',
    ACCEPT: 'Accept',
  },
  occupation: ['Civil Engineer', 'Architect', 'Mason (with Labour)', 'Carpenter', 'Electrician', 'Plumber', 'Painter', 'Welder', 'Tiles / Stone / Flooring', 'Home Decoration'],
  exprInYears: ['0 Year', '1 Year', '2 Years', '3 Years', '4 Years', '5 Years', '6 Years', '7 Years', '8 Years', '9 Years', '10 Years'],
  exprInMonths: ['0 Month', '1 Month', '2 Months', '3 Months', '4 Months', '5 Months', '6 Months', '7 Months', '8 Months', '9 Months', '10 Months', '11 Months'],
};

export default APP_CONSTANTS;
