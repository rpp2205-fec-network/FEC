/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/Product Overview/components/addToCart.jsx":
/*!**************************************************************!*\
  !*** ./client/src/Product Overview/components/addToCart.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddToCart)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns/esm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var AddToCart = /*#__PURE__*/function (_React$Component) {
  _inherits(AddToCart, _React$Component);
  var _super = _createSuper(AddToCart);
  function AddToCart(props) {
    var _this;
    _classCallCheck(this, AddToCart);
    _this = _super.call(this, props);
    _this.state = {
      size: '',
      quantity: -1,
      totalQuantity: -1,
      quantityArr: [],
      data: [{
        sku: 'no data',
        quantity: 'no data',
        size: 'no data'
      }],
      currentSku: '-1',
      sizeSelected: false
    };
    //binds the functions to this component for the 'this' value
    _this.changeData = _this.changeData.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.onStar = _this.onStar.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(AddToCart, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      //if new props are received
      if (prevProps.currentStyleInfo !== this.props.currentStyleInfo) {
        var data = [];
        var skusArray = this.props.currentStyleInfo.skus;
        var quantityArray = [];
        for (var key in skusArray) {
          data.push({
            sku: key,
            quantity: skusArray[key].quantity,
            size: skusArray[key].size
          });
        }
        for (var i = 1; i <= this.props.currentStyleInfo.skus[data[0].sku].quantity; i++) {
          quantityArray.push(i);
        }
        if (quantityArray.length > 15) {
          quantityArray.length = 15;
        }
        this.setState({
          quantity: 1,
          totalQuantity: this.props.currentStyleInfo.skus[data[0].sku].quantity,
          quantityArr: quantityArray,
          data: data,
          currentSku: data[0].sku
        });
        //if state is changed by sizeSelector
      } else if (this.state.currentSku !== prevState.currentSku) {
        console.log('second part of componentDidUpdate prevState \n', prevState, '\n current State\n', this.state);
        console.log('sku', this.props.currentStyleInfo.skus[this.state.currentSku]);
        var newQuantityTotal = this.props.currentStyleInfo.skus[this.state.currentSku].quantity;
        var newQuantityArray = [];
        for (var i = 1; i <= newQuantityTotal; i++) {
          newQuantityArray.push(i);
        }
        if (newQuantityArray.length > 15) {
          newQuantityArray.length = 15;
        }
        this.setState({
          totalQuantity: newQuantityTotal,
          quantityArr: newQuantityArray,
          quantity: 1
        });
      }
    }
    //Dynamically changes selected option
  }, {
    key: "changeData",
    value: function changeData(e) {
      var name = e.target.name;
      var splitVal = e.target.value.split(', ');
      var size = splitVal[0];
      var sku = splitVal[1];
      console.log('e.target', e.target.value);
      if (e.target.name === 'quantity') {
        this.setState(_defineProperty({}, name, e.target.value));
      } else {
        var _this$setState2;
        this.setState((_this$setState2 = {}, _defineProperty(_this$setState2, name, size), _defineProperty(_this$setState2, "currentSku", sku), _this$setState2));
      }
      console.log('Name: \n', name, 'Property: \n', this.state[name], 'Value\n', e.target.value);
    }

    //Handles onClick for addToCart button
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      //console.log('ADD TO CART CLICKED')
    }
  }, {
    key: "onStar",
    value: function onStar(e) {
      //console.log('Starred')
    }
  }, {
    key: "render",
    value: function render() {
      //determining whether item is completely out of stock
      var inStock = this.state.data.map(function (item) {
        if (item.quantity > 0) {
          return item;
        }
      });
      //if items in stock
      if (inStock.length > 0) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "addToCart",
          children: ["Size: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
            name: "size",
            onChange: this.changeData,
            children: this.state.data.map(function (item) {
              console.log('ITEM', item);
              if (item.quantity <= 0) {
                console.log('Item size of ' + item.size + ' is out of stock');
              } else {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  value: "".concat(item.size, ", ").concat(item.sku),
                  children: item.size
                }, item.sku);
              }
            })
          }), "Quantity: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
            name: "quantity",
            disabled: !this.state.size,
            onChange: this.changeData,
            children: this.state.quantityArr.map(function (number) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                value: number,
                children: number
              }, number);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "button",
            value: "Add To Bag          +",
            onClick: this.onSubmit
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "button",
            value: "Pretend an image of a star is here",
            onClick: this.onStar
          })]
        });
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "addToCart",
          children: ["Size: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
            name: "size",
            onChange: this.changeData,
            disabled: true,
            children: "OUT OF STOCK"
          }), "Quantity: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
            name: "quantity",
            onChange: this.changeData,
            disabled: true,
            children: "-"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "button",
            value: "Add To Bag          +",
            onClick: this.onSubmit
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "button",
            value: "Pretend an image of a star is here",
            onClick: this.onStar
          })]
        });
      }
    }
  }]);
  return AddToCart;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);


/***/ }),

/***/ "./client/src/Product Overview/components/imageGallery.jsx":
/*!*****************************************************************!*\
  !*** ./client/src/Product Overview/components/imageGallery.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageGallery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ImageGallery = /*#__PURE__*/function (_React$Component) {
  _inherits(ImageGallery, _React$Component);
  var _super = _createSuper(ImageGallery);
  function ImageGallery(props) {
    var _this;
    _classCallCheck(this, ImageGallery);
    _this = _super.call(this, props);
    //default empty info, first style when data DOES load.
    _this.state = {
      currentPhoto: 0,
      currentFirstOption: 0,
      view: 'default'
    };
    _this.onCycleThumbnail = _this.onCycleThumbnail.bind(_assertThisInitialized(_this));
    _this.onSelectThumbnail = _this.onSelectThumbnail.bind(_assertThisInitialized(_this));
    _this.onCycleMainImage = _this.onCycleMainImage.bind(_assertThisInitialized(_this));
    _this.onChangeView = _this.onChangeView.bind(_assertThisInitialized(_this));
    return _this;
  }

  //should move to next main image, and set the top thumbnail image to the same one.
  _createClass(ImageGallery, [{
    key: "onCycleMainImage",
    value: function onCycleMainImage(e) {
      var max = this.props.styleInfo[this.props.currentStyle].photos.length;
      if (e.target.name === 'rightButton') {
        if (this.state.currentPhoto < max - 1) {
          this.setState({
            currentFirstOption: this.state.currentPhoto + 1,
            currentPhoto: this.state.currentPhoto + 1
          });
        } else {
          console.log('Already at right most image');
        }
      } else if (e.target.name === 'leftButton') {
        if (this.state.currentPhoto > 0) {
          this.setState({
            currentFirstOption: this.state.currentPhoto - 1,
            currentPhoto: this.state.currentPhoto - 1
          });
        } else {
          console.log('Already at left most image');
        }
      }
    }
    //should move the thumbnail carousel up and down
  }, {
    key: "onCycleThumbnail",
    value: function onCycleThumbnail(e) {
      var max = this.props.styleInfo[this.props.currentStyle].photos.length;
      console.log('MAX', max);
      if (e.target.name === 'upButton') {
        if (this.state.currentFirstOption > 0) {
          this.setState({
            currentFirstOption: this.state.currentFirstOption - 1
          });
        } else {
          console.log('Already at highest value');
        }
      } else if (e.target.name === 'downButton') {
        if (this.state.currentFirstOption < max - 1) {
          this.setState({
            currentFirstOption: this.state.currentFirstOption + 1
          });
        } else {
          console.log('Already at lowest value');
        }
      }
    }
    //should move the thumbnail carousel so that the selected one is at the top, and make the main image the same
  }, {
    key: "onSelectThumbnail",
    value: function onSelectThumbnail(e) {
      var newImageId = parseInt(e.target.id);
      console.log('NEW IMAGE ID', e.target.id);
      this.setState({
        currentPhoto: newImageId,
        currentFirstOption: newImageId
      });
    }

    //changes view style between default and expanded mode
  }, {
    key: "onChangeView",
    value: function onChangeView() {
      if (this.state.view === 'default') {
        console.log('Switching to expanded');
        this.setState({
          view: 'expanded'
        });
      } else {
        console.log('Switching to default');
        this.setState({
          view: 'default'
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var styleInfo = this.props.styleInfo;
      var currentStyle = this.props.currentStyle;
      var currentPhoto = this.state.currentPhoto;
      var selectionWheelPhotos = [];
      //if there are no photos, load this
      if (styleInfo.length === 0 || styleInfo[currentStyle].photos.length === 0) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "imageGallery",
          children: "NO IMAGES FOUND"
        });
        //else load photos based on current selections
      } else {
        var max = this.props.styleInfo[this.props.currentStyle].photos.length;
        if (max - this.state.currentFirstOption > 7) {
          var iterator = 7;
        } else {
          var iterator = max - this.state.currentFirstOption;
        }
        for (var i = this.state.currentFirstOption; i < this.state.currentFirstOption + iterator; i++) {
          selectionWheelPhotos.push({
            id: i,
            thumbnail_url: styleInfo[currentStyle].photos[i].thumbnail_url
          });
        }
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "image_gallery",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
            type: "button",
            value: "Enter Fullscreen",
            onClick: this.onChangeView
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("aside", {
            className: "thumbnails_list",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
              name: "upButton",
              className: "thumnail_button",
              type: "button",
              value: "^",
              onClick: this.onCycleThumbnail
            }), selectionWheelPhotos.map(function (image) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                  className: "thumbnail_img",
                  id: image.id,
                  src: image.thumbnail_url,
                  onClick: _this2.onSelectThumbnail
                })
              }, image.id);
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
              name: "downButton",
              className: "thumnail_button",
              type: "button",
              value: "v",
              onClick: this.onCycleThumbnail
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("main", {
            className: "selected_image",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
              name: "leftButton",
              className: "main_image_button",
              type: "button",
              value: "<",
              onClick: this.onCycleMainImage
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              className: "selected_image",
              src: styleInfo[currentStyle].photos[currentPhoto].url
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
              name: "rightButton",
              className: "main_image_button",
              type: "button",
              value: ">",
              onClick: this.onCycleMainImage
            })]
          })]
        });
      }
    }
  }]);
  return ImageGallery;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./client/src/Product Overview/components/productInformation.jsx":
/*!***********************************************************************!*\
  !*** ./client/src/Product Overview/components/productInformation.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductInformation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ProductInformation = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductInformation, _React$Component);
  var _super = _createSuper(ProductInformation);
  function ProductInformation(props) {
    var _this;
    _classCallCheck(this, ProductInformation);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  //load product information
  _createClass(ProductInformation, [{
    key: "render",
    value: function render() {
      var productInfo = this.props.productInfo;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "productInformation",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          children: "Product Information"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          children: "Reviews Info"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          children: productInfo.category
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          children: productInfo.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          children: productInfo.default_price
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h5", {
          children: productInfo.slogan
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          children: productInfo.description
        })]
      });
    }
  }]);
  return ProductInformation;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./client/src/Product Overview/components/styleSelector.jsx":
/*!******************************************************************!*\
  !*** ./client/src/Product Overview/components/styleSelector.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StyleSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var StyleSelector = /*#__PURE__*/function (_React$Component) {
  _inherits(StyleSelector, _React$Component);
  var _super = _createSuper(StyleSelector);
  function StyleSelector(props) {
    var _this;
    _classCallCheck(this, StyleSelector);
    _this = _super.call(this, props);
    _this.state = {};
    _this.onSelectStyle = _this.onSelectStyle.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(StyleSelector, [{
    key: "onSelectStyle",
    value: function onSelectStyle(e) {
      //console.log('Clicked')
      var id = parseInt(e.target.id);
      this.props.onChangeStyle(id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var styleInfo = this.props.styleInfo;
      if (styleInfo.length === 0) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          children: "NO STYLE INFO FOUND"
        });
        //else load photos based on current selections
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "styleSelector",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
            children: "StyleSelector"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            children: styleInfo.map(function (style) {
              if (style === _this2.props.styleInfo[_this2.props.currentStyle]) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                  className: "selected_style",
                  onClick: _this2.onSelectStyle,
                  id: style.style_id,
                  children: style.name
                }, style.style_id);
              } else {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                  className: "unselected_style",
                  onClick: _this2.onSelectStyle,
                  id: style.style_id,
                  children: style.name
                }, style.style_id);
              }
            })
          })]
        });
      }
    }
  }]);
  return StyleSelector;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./client/src/Product Overview/productOverview.jsx":
/*!*********************************************************!*\
  !*** ./client/src/Product Overview/productOverview.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductOverview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_imageGallery_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/imageGallery.jsx */ "./client/src/Product Overview/components/imageGallery.jsx");
/* harmony import */ var _components_productInformation_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/productInformation.jsx */ "./client/src/Product Overview/components/productInformation.jsx");
/* harmony import */ var _components_styleSelector_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/styleSelector.jsx */ "./client/src/Product Overview/components/styleSelector.jsx");
/* harmony import */ var _components_addToCart_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/addToCart.jsx */ "./client/src/Product Overview/components/addToCart.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var _productOverviewErrorBoundary_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productOverviewErrorBoundary.jsx */ "./client/src/Product Overview/productOverviewErrorBoundary.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var ProductOverview = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductOverview, _React$Component);
  var _super = _createSuper(ProductOverview);
  function ProductOverview(props) {
    var _this;
    _classCallCheck(this, ProductOverview);
    _this = _super.call(this, props);
    //default value of an id taken from the API, so that the rest of the code works.
    _this.state = {
      currentProduct: {},
      styleInfo: [],
      currentProductId: 71701,
      currentStyle: 0
    };
    _this.getAllProductInfo = _this.getAllProductInfo.bind(_assertThisInitialized(_this));
    _this.getProductInfo = _this.getProductInfo.bind(_assertThisInitialized(_this));
    _this.getProductStyles = _this.getProductStyles.bind(_assertThisInitialized(_this));
    _this.changeStyle = _this.changeStyle.bind(_assertThisInitialized(_this));
    return _this;
  }
  //get data after component mounts
  _createClass(ProductOverview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      return this.getProductInfo(71701).then(function (data) {
        _this2.setState({
          currentProduct: data
        });
      }).then(function () {
        return _this2.getProductStyles(71701);
      }).then(function (data) {
        _this2.setState({
          styleInfo: data
        });
      });
    }

    //all client-side routing done in the main component
  }, {
    key: "getAllProductInfo",
    value: function getAllProductInfo() {
      return axios__WEBPACK_IMPORTED_MODULE_5__.get('/productOverview').then(function (response) {
        return response.data;
      })["catch"](function (err) {
        console.log('ERR IN COMPONENTDIDMOUNT \n', err);
      });
    }
  }, {
    key: "getProductInfo",
    value: function getProductInfo(id) {
      return axios__WEBPACK_IMPORTED_MODULE_5__.get('/productOverview/' + id).then(function (response) {
        return response.data;
      })["catch"](function (err) {
        throw err;
      });
    }
  }, {
    key: "getProductStyles",
    value: function getProductStyles(id) {
      return axios__WEBPACK_IMPORTED_MODULE_5__.get('/productOverview/styles/' + id).then(function (response) {
        return response.data.results;
      })["catch"](function (err) {
        // throw err
        console.log('ERR');
      });
    }
    //top level function for when user selects different style
  }, {
    key: "changeStyle",
    value: function changeStyle(styleID) {
      for (var i = 0; i < this.state.styleInfo.length; i++) {
        if (styleID === this.state.styleInfo[i].style_id) {
          if (this.state.currentStyle !== i) {
            this.setState({
              currentStyle: i
            });
          }
          break;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_productOverviewErrorBoundary_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
            children: "Product Overview"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_imageGallery_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
            onLod: this.getProductStyles,
            styleInfo: this.state.styleInfo,
            currentStyle: this.state.currentStyle
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_productInformation_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            onLoad: this.getProductInfo,
            productInfo: this.state.currentProduct
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_styleSelector_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            onLoad: this.getProductStyles,
            styleInfo: this.state.styleInfo,
            currentStyle: this.state.currentStyle,
            onChangeStyle: this.changeStyle
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_addToCart_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
            children: "End of Product Overview"
          })]
        })
      });
    }
  }]);
  return ProductOverview;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./client/src/Product Overview/productOverviewErrorBoundary.jsx":
/*!**********************************************************************!*\
  !*** ./client/src/Product Overview/productOverviewErrorBoundary.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductOverviewErrorBoundary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ProductOverviewErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductOverviewErrorBoundary, _React$Component);
  var _super = _createSuper(ProductOverviewErrorBoundary);
  function ProductOverviewErrorBoundary(props) {
    var _this;
    _classCallCheck(this, ProductOverviewErrorBoundary);
    _this = _super.call(this, props);
    _this.state = {
      error: null,
      errorInfo: null
    };
    return _this;
  }
  _createClass(ProductOverviewErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
      // You can also log error messages to an error reporting service here
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.errorInfo) {
        // Error path
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
            children: "Something went wrong."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("details", {
            style: {
              whiteSpace: 'pre-wrap'
            },
            children: [this.state.error && this.state.error.toString(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), this.state.errorInfo.componentStack]
          })]
        });
      }
      // Normally, just render children
      return this.props.children;
    }
  }]);
  return ProductOverviewErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./client/src/QuestionsAnswers/Questions&Answers.jsx":
/*!***********************************************************!*\
  !*** ./client/src/QuestionsAnswers/Questions&Answers.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_SearchQuestions_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SearchQuestions.jsx */ "./client/src/QuestionsAnswers/components/SearchQuestions.jsx");
/* harmony import */ var _components_QuestionsList_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/QuestionsList.jsx */ "./client/src/QuestionsAnswers/components/QuestionsList.jsx");
/* harmony import */ var _QuestionsAnswersErrorBoundary_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuestionsAnswersErrorBoundary.jsx */ "./client/src/QuestionsAnswers/QuestionsAnswersErrorBoundary.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var QuestionsAnswers = /*#__PURE__*/function (_React$Component) {
  _inherits(QuestionsAnswers, _React$Component);
  var _super = _createSuper(QuestionsAnswers);
  function QuestionsAnswers(props) {
    var _this;
    _classCallCheck(this, QuestionsAnswers);
    _this = _super.call(this, props);
    _this.state = {
      product_id: '',
      questions: [],
      sortedQuestions: [],
      showQuestionModal: false
    };
    _this.sortQuestions = _this.sortQuestions.bind(_assertThisInitialized(_this));
    _this.getQuestions = _this.getQuestions.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(QuestionsAnswers, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getQuestions();
    }
  }, {
    key: "getQuestions",
    value: function getQuestions() {
      var _this2 = this;
      axios.get('/getQuestions').then(function (questions) {
        _this2.setState({
          product_id: questions.data.product_id,
          questions: questions.data.results
        }, function () {
          this.sortQuestions();
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "sortQuestions",
    value: function sortQuestions() {
      var questionsCopy = this.state.questions.slice();
      questionsCopy.sort(function (a, b) {
        return b.question_helpfulness - a.question_helpfulness;
      });
      this.setState({
        sortedQuestions: questionsCopy
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        id: "QAwidget",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
            children: "Questions & Answers"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {})]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_SearchQuestions_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_QuestionsAnswersErrorBoundary_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_QuestionsList_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
              questions: this.state.sortedQuestions,
              product_id: this.state.product_id
            })
          })
        })]
      });
    }
  }]);
  return QuestionsAnswers;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionsAnswers);

/***/ }),

/***/ "./client/src/QuestionsAnswers/QuestionsAnswersErrorBoundary.jsx":
/*!***********************************************************************!*\
  !*** ./client/src/QuestionsAnswers/QuestionsAnswersErrorBoundary.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);
  var _super = _createSuper(ErrorBoundary);
  function ErrorBoundary(props) {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    _this = _super.call(this, props);
    _this.state = {
      error: null,
      errorInfo: null
    };
    return _this;
  }
  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
      // You can also log error messages to an error reporting service here
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.errorInfo) {
        // Error path
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
            children: "Something went wrong friend. Please try again."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("details", {
            style: {
              whiteSpace: 'pre-wrap'
            },
            children: [this.state.error && this.state.error.toString(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), this.state.errorInfo.componentStack]
          })]
        });
      }
      // Normally, just render children
      return this.props.children;
    }
  }]);
  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);

/***/ }),

/***/ "./client/src/QuestionsAnswers/components/AddAnswer.jsx":
/*!**************************************************************!*\
  !*** ./client/src/QuestionsAnswers/components/AddAnswer.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cloudinary/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cloudinary/url-gen'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var AddAnswer = function AddAnswer(_ref) {
  var show = _ref.show,
    onClose = _ref.onClose,
    question = _ref.question,
    productId = _ref.productId;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(show),
    _useState2 = _slicedToArray(_useState, 2),
    modal = _useState2[0],
    setModal = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    body = _useState4[0],
    setBody = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    name = _useState6[0],
    setName = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    email = _useState8[0],
    setEmail = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    images = _useState10[0],
    setImages = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    imageURLs = _useState12[0],
    setImageURLs = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    cloudImages = _useState14[0],
    setCloudImages = _useState14[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (images.length < 1 || images.length > 5) return;
    var currentImg = images[images.length - 1];
    setImageURLs([].concat(_toConsumableArray(imageURLs), [window.URL.createObjectURL(new Blob(currentImg, {
      type: "image/jpeg"
    }))]));
    // Now convert local urls to cloudinary urls
    var cloudImgs = [];
    images.forEach(function (img) {
      var cld = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cloudinary/url-gen'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        cloud: {
          cloudName: 'atelier'
        }
      });
      var cloudImage = cld.image(img[0].name);
      var url = cloudImage.toURL();
      console.log(url);
      cloudImgs.push(url);
    });
    setCloudImages(cloudImgs);
  }, [images]);
  var onImageChange = function onImageChange(e) {
    setImages(function (prevState) {
      return [].concat(_toConsumableArray(prevState), [e.target.files]);
    });
  };
  var handleClose = function handleClose(e) {
    e.preventDefault();
    onClose(e);
  };
  var handleChange = function handleChange(e, field) {
    if (field === 'body') {
      setBody(e.target.value);
    } else if (field === 'name') {
      setName(e.target.value);
    } else if (field === 'email') {
      setEmail(e.target.value);
    }
  };
  var handleSubmit = function handleSubmit() {
    var question_id = question.question_id;
    var answer = {
      body: body,
      name: name,
      email: email,
      photos: cloudImages
    };
    var emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailFormat.test(email) || email === '') {
      alert('You must enter the following: email');
    } else if (name === '') {
      alert('You must enter the following: display name');
    } else if (body === '') {
      alert('You must enter the following: answer');
    } else {
      axios.post('/postAnswer', {
        question_id: question_id,
        answer: answer
      });
    }
  };
  var handleError = function handleError() {
    alert('Please select a valid image');
  };
  if (!show) {
    return null;
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("form", {
      className: "answerModal",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "answerModalContent",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          children: "Submit your Answer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
          children: question.question_body
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "youranswer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              children: " Your Answer * "
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
            type: "text",
            maxLength: "1000",
            required: true,
            rows: 10,
            cols: 50,
            onChange: function onChange(e) {
              return handleChange(e, 'body');
            }
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "yournickname",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              children: " What is your nickname? * "
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
            type: "text",
            maxLength: "60",
            placeholder: "Example: jack543!",
            required: true,
            rows: 1,
            cols: 50,
            onChange: function onChange(e) {
              return handleChange(e, 'name');
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              className: "labels",
              children: " For privacy reasons, do not use your full name or email address"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "youremail",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              children: " What is your email? * "
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
            type: "email",
            maxLength: "60",
            placeholder: "Example: jack@email.com",
            required: true,
            rows: 1,
            cols: 50,
            onChange: function onChange(e) {
              return handleChange(e, 'email');
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              className: "labels",
              children: " For authentication reasons, you will not be emailed "
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "uploadImages",
          children: imageURLs.map(function (imageSrc, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              className: "uploadImagePreview",
              src: imageSrc,
              onError: handleError
            }, index);
          })
        }), images.length < 5 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          type: "file",
          accept: "image/*",
          onChange: function onChange(e) {
            return onImageChange(e);
          }
        }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "Submit",
          className: "answerSubmit",
          onClick: handleSubmit,
          children: "Submit"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "Submit",
          className: "QAbutton",
          onClick: function onClick(e) {
            return handleClose(e);
          },
          children: "Close"
        })]
      })
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddAnswer);

/***/ }),

/***/ "./client/src/QuestionsAnswers/components/AddQuestion.jsx":
/*!****************************************************************!*\
  !*** ./client/src/QuestionsAnswers/components/AddQuestion.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var AddQuestion = function AddQuestion(_ref) {
  var show = _ref.show,
    onClose = _ref.onClose,
    product_id = _ref.product_id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(show),
    _useState2 = _slicedToArray(_useState, 2),
    modal = _useState2[0],
    setModal = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    body = _useState4[0],
    setBody = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    name = _useState6[0],
    setName = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    email = _useState8[0],
    setEmail = _useState8[1];
  var handleClose = function handleClose(e) {
    e.preventDefault();
    onClose(e);
  };
  var handleChange = function handleChange(e, field) {
    if (field === 'body') {
      setBody(e.target.value);
    } else if (field === 'name') {
      setName(e.target.value);
    } else if (field === 'email') {
      setEmail(e.target.value);
    }
  };
  var handleSubmit = function handleSubmit() {
    var question = {
      body: body,
      name: name,
      email: email,
      product_id: Number(product_id)
    };
    var emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailFormat.test(email) || email === '') {
      alert('You must enter the following: email');
    } else if (name === '') {
      alert('You must enter the following: display name');
    } else if (body === '') {
      alert('You must enter the following: answer');
    } else {
      axios.post('/postQuestion', {
        question: question
      });
    }
  };
  if (!show) {
    return null;
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("form", {
      className: "questionModal",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "questionModalContent",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          children: "Ask Your Question"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "yourquestion",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
              children: " Your Question * "
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
            type: "text",
            maxLength: "1000",
            required: true,
            rows: 10,
            cols: 50,
            onChange: function onChange(e) {
              return handleChange(e, 'body');
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "yournickname",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
              children: " What is your nickname? * "
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
            type: "text",
            maxLength: "60",
            placeholder: "Example: jackson11!",
            required: true,
            rows: 1,
            cols: 50,
            onChange: function onChange(e) {
              return handleChange(e, 'name');
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
              className: "labels",
              children: " For privacy reasons, do not use your full name or email address"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "youremail",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
              children: " What is your email? * "
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
            type: "email",
            maxLength: "60",
            placeholder: "Why did you like the product or not?",
            rows: 1,
            cols: 50,
            required: true,
            onChange: function onChange(e) {
              return handleChange(e, 'email');
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
              className: "labels",
              children: " For authentication reasons, you will not be emailed "
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "modalCloseSubmit",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            type: "Submit",
            className: "questionSubmit",
            onClick: handleSubmit,
            children: "Submit"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            type: "Submit",
            className: "QAbutton",
            onClick: function onClick(e) {
              return handleClose(e);
            },
            children: "Close"
          })]
        })]
      })
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddQuestion);

/***/ }),

/***/ "./client/src/QuestionsAnswers/components/Answer.jsx":
/*!***********************************************************!*\
  !*** ./client/src/QuestionsAnswers/components/Answer.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AnswerHelpfulAndReport_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnswerHelpfulAndReport.jsx */ "./client/src/QuestionsAnswers/components/AnswerHelpfulAndReport.jsx");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var Answer = /*#__PURE__*/function (_React$Component) {
  _inherits(Answer, _React$Component);
  var _super = _createSuper(Answer);
  function Answer(props) {
    var _this;
    _classCallCheck(this, Answer);
    _this = _super.call(this, props);
    _this.state = {
      helpfulClicked: {},
      showAllItems: false
    };
    _this.showCollapseAnswers = _this.showCollapseAnswers.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Answer, [{
    key: "showCollapseAnswers",
    value: function showCollapseAnswers(e) {
      e.preventDefault();
      this.state.showAllItems === false ? this.setState({
        showAllItems: true
      }) : this.setState({
        showAllItems: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      if (this.state.showAllItems === false) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            id: "answerContent",
            children: [" ", this.props.answers.slice(0, 2).map(function (answer, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                target: "_blank",
                id: "answerText",
                children: ["  ", answer.body, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  id: "answererInfo",
                  children: ["by ", answer.answerer_name === 'Seller' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    style: {
                      fontWeight: 'bold'
                    },
                    children: answer.answerer_name
                  }) : answer.answerer_name, ",", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    children: " "
                  }), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(new Date(answer.date), 'MMMM dd, yyyy'), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_AnswerHelpfulAndReport_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    answer: answer
                  })]
                })]
              }, answer.answer_id);
            }), " "]
          }), this.props.answers.length > 2 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
            type: "button",
            value: "Load more answers",
            className: "QAinputbutton",
            onClick: function onClick(e) {
              return _this2.showCollapseAnswers(e);
            }
          }) : '']
        });
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            id: "allAnswerContent",
            children: [" ", this.props.answers.map(function (answer, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                target: "_blank",
                id: "answerText",
                children: ["  ", answer.body, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  id: "answererInfo",
                  children: ["by ", answer.answerer_name === 'Seller' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    style: {
                      fontWeight: 'bold'
                    },
                    children: answer.answerer_name
                  }) : answer.answerer_name, ",", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    children: " "
                  }), Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(new Date(answer.date), 'MMMM dd, yyyy'), "  ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_AnswerHelpfulAndReport_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    answer: answer
                  })]
                })]
              }, answer.answer_id);
            }), " "]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
            type: "button",
            value: "Collapse answers",
            className: "QAinputbutton",
            onClick: function onClick(e) {
              return _this2.showCollapseAnswers(e);
            }
          })]
        });
      }
    }
  }]);
  return Answer;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Answer);

/***/ }),

/***/ "./client/src/QuestionsAnswers/components/AnswerHelpfulAndReport.jsx":
/*!***************************************************************************!*\
  !*** ./client/src/QuestionsAnswers/components/AnswerHelpfulAndReport.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var AnswerHelpfulAndReport = function AnswerHelpfulAndReport(_ref) {
  var answer = _ref.answer;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(answer.helpfulness),
    _useState2 = _slicedToArray(_useState, 2),
    helpful = _useState2[0],
    setHelpful = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    report = _useState4[0],
    setReport = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    disable = _useState6[0],
    setDisable = _useState6[1];
  var wasHelpful = function wasHelpful(e) {
    e.preventDefault();
    setHelpful(answer.helpfulness += 1);
    setDisable(true);
    axios.put('/putAnswerHelpful', {
      id: answer.answer_id
    }).then(function (response) {
      console.log('+1 helpful');
    })["catch"](function (err) {
      return console.log('could not be helpful');
    });
  };
  var reportAnswer = function reportAnswer(e) {
    e.preventDefault();
    setReport(true);
    axios.put('/reportAnswer', {
      id: answer.answer_id
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "answerHelpfulAndReport",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "bar",
      children: "|"
    }), " Helpful? ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      type: "submit",
      className: "QAbutton",
      disabled: disable,
      onClick: wasHelpful,
      children: "Yes"
    }), " (", answer.helpfulness, ")", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "bar",
      children: "|"
    }), " ", !report ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      type: "submit",
      className: "QAbutton",
      onClick: reportAnswer,
      children: "Report"
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      children: "Reported"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswerHelpfulAndReport);

/***/ }),

/***/ "./client/src/QuestionsAnswers/components/Question.jsx":
/*!*************************************************************!*\
  !*** ./client/src/QuestionsAnswers/components/Question.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _QuestionHelpfulAddAnswer_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionHelpfulAddAnswer.jsx */ "./client/src/QuestionsAnswers/components/QuestionHelpfulAddAnswer.jsx");
/* harmony import */ var _Answer_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Answer.jsx */ "./client/src/QuestionsAnswers/components/Answer.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var Question = /*#__PURE__*/function (_React$Component) {
  _inherits(Question, _React$Component);
  var _super = _createSuper(Question);
  function Question(props) {
    var _this;
    _classCallCheck(this, Question);
    _this = _super.call(this, props);
    _this.state = {
      question: _this.props.question,
      answers: [],
      sortedAnswers: []
    };
    _this.getAnswersList = _this.getAnswersList.bind(_assertThisInitialized(_this));
    _this.sortAnswers = _this.sortAnswers.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Question, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getAnswersList();
    }
  }, {
    key: "getAnswersList",
    value: function getAnswersList() {
      var _this2 = this;
      axios.get('/getAnswers', {
        params: {
          id: this.state.question.question_id
        }
      }).then(function (result) {
        var currentAnswers = result.data.results;
        _this2.setState({
          answers: currentAnswers
        }, function () {
          this.sortAnswers();
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "sortAnswers",
    value: function sortAnswers() {
      var answersCopy = this.state.answers.slice();
      var sorted = answersCopy.reduce(function (x, element) {
        if (element.answerer_name === 'Seller') {
          return [element].concat(_toConsumableArray(x));
        }
        return [].concat(_toConsumableArray(x), [element]);
      }, []).sort(function (a, b) {
        if (!a.answerer_name === 'Seller' || !b.answerer_name === 'Seller') {
          return b.helpfulness - a.helpfulness;
        } else if (a.answerer_name === 'Seller' && b.answerer_name === 'Seller') {
          return b.helpfulness - a.helpfulness;
        }
      });
      this.setState({
        sortedAnswers: sorted
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        id: "individualQuestion",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_QuestionHelpfulAddAnswer_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
          helpfulCount: this.state.question.question_helpfulness,
          question: this.state.question,
          productId: this.props.productId
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h3", {
          id: "question",
          children: ["Q: ", this.state.question.question_body]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          id: "answer",
          children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
            children: "A: "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Answer_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            answers: this.state.sortedAnswers
          })]
        })]
      });
    }
  }]);
  return Question;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Question);

/***/ }),

/***/ "./client/src/QuestionsAnswers/components/QuestionHelpfulAddAnswer.jsx":
/*!*****************************************************************************!*\
  !*** ./client/src/QuestionsAnswers/components/QuestionHelpfulAddAnswer.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AddAnswer_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddAnswer.jsx */ "./client/src/QuestionsAnswers/components/AddAnswer.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var QuestionHelpfulAddAnswer = function QuestionHelpfulAddAnswer(_ref) {
  var question = _ref.question,
    helpfulCount = _ref.helpfulCount,
    productId = _ref.productId;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    disable = _useState2[0],
    setDisable = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(question.question_helpfulness),
    _useState4 = _slicedToArray(_useState3, 2),
    helpful = _useState4[0],
    setHelpful = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    show = _useState6[0],
    setShow = _useState6[1];
  var wasHelpful = function wasHelpful(e) {
    e.preventDefault();
    setHelpful(question.question_helpfulness += 1);
    setDisable(true);
    axios.put('/putQuestionHelpful', {
      id: question.question_id
    }).then(function (response) {
      console.log('+1 helpful');
    })["catch"](function (err) {
      return console.log('could not be helpful');
    });
  };
  var showModal = function showModal(e) {
    setShow(!show);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    id: "addAnswer",
    children: ["Helpful? ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      type: "Submit",
      className: "QAbutton",
      disabled: disable,
      onClick: wasHelpful,
      children: "Yes"
    }), " (", helpful, ") ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "bar",
      children: "|"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      type: "Submit",
      className: "QAbutton",
      onClick: showModal,
      children: "Add answer "
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AddAnswer_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      show: show,
      onClose: showModal,
      question: question,
      productId: productId
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionHelpfulAddAnswer);

/***/ }),

/***/ "./client/src/QuestionsAnswers/components/QuestionsList.jsx":
/*!******************************************************************!*\
  !*** ./client/src/QuestionsAnswers/components/QuestionsList.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _Question_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Question.jsx */ "./client/src/QuestionsAnswers/components/Question.jsx");
/* harmony import */ var _AddQuestion_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddQuestion.jsx */ "./client/src/QuestionsAnswers/components/AddQuestion.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var QuestionsList = /*#__PURE__*/function (_React$Component) {
  _inherits(QuestionsList, _React$Component);
  var _super = _createSuper(QuestionsList);
  function QuestionsList(props) {
    var _this;
    _classCallCheck(this, QuestionsList);
    _this = _super.call(this, props);
    _this.state = {
      product_id: '',
      itemsShown: 2,
      showAllItems: false,
      totalQuestions: _this.props.questions.length
    };
    _this.showMore = _this.showMore.bind(_assertThisInitialized(_this));
    _this.collapse = _this.collapse.bind(_assertThisInitialized(_this));
    _this.showModal = _this.showModal.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(QuestionsList, [{
    key: "showMore",
    value: function showMore() {
      if (this.state.itemsShown >= this.props.questions.length) {
        this.setState({
          showAllItems: true
        });
      } else if (this.state.itemsShown < this.props.questions.length && (this.props.questions.length - this.state.itemsShown === 1 || this.props.questions.length - this.state.itemsShown === 0)) {
        this.setState({
          showAllItems: true
        });
      } else if (this.state.itemsShown < this.props.questions.length) {
        this.setState({
          itemsShown: this.state.itemsShown + 2
        });
      }
    }
  }, {
    key: "collapse",
    value: function collapse() {
      this.setState({
        showAllItems: false,
        itemsShown: 2
      });
    }
  }, {
    key: "showModal",
    value: function showModal() {
      this.setState({
        showQuestionModal: !this.state.showQuestionModal
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      if (!this.state.showAllItems && this.props.questions.length > 0) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            id: "questionsViewDefault",
            children: this.props.questions.slice(0, this.state.itemsShown).map(function (question) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Question_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
                question_id: question.question_id,
                question: question,
                productId: _this2.props.product_id
              }, question.question_id);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              type: "button",
              value: "More answered questions",
              className: "moreAnsweredQuestions",
              onClick: this.showMore
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              type: "button",
              value: "Add a question +",
              className: "addQuestionButton",
              onClick: this.showModal
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AddQuestion_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
              show: this.state.showQuestionModal,
              onClose: this.showModal,
              product_id: this.props.product_id
            })]
          })]
        });
      } else if (this.state.showAllItems) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            id: "questionsViewAll",
            children: this.props.questions.map(function (question) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Question_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
                question_id: question.question_id,
                question: question,
                productId: _this2.props.product_id
              }, question.question_id);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              type: "button",
              value: "Show Less",
              className: "moreAnsweredQuestions",
              onClick: this.collapse
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              type: "button",
              value: "Add a question +",
              className: "addQuestionButton",
              onClick: this.showModal
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AddQuestion_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
              show: this.state.showQuestionModal,
              onClose: this.showModal,
              product_id: this.props.product_id
            })]
          })]
        });
      } else if (this.props.questions.length === 0) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          id: "questionsView",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            type: "button",
            value: "Add a question +"
          })
        });
      }
    }
  }]);
  return QuestionsList;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionsList);

/***/ }),

/***/ "./client/src/QuestionsAnswers/components/SearchQuestions.jsx":
/*!********************************************************************!*\
  !*** ./client/src/QuestionsAnswers/components/SearchQuestions.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SearchQuestions = /*#__PURE__*/function (_React$Component) {
  _inherits(SearchQuestions, _React$Component);
  var _super = _createSuper(SearchQuestions);
  function SearchQuestions(props) {
    var _this;
    _classCallCheck(this, SearchQuestions);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  _createClass(SearchQuestions, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        id: "searchquestions",
        children: "Have a question? Search for answers..."
      });
    }
  }]);
  return SearchQuestions;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchQuestions);

/***/ }),

/***/ "./client/src/RelatedProducts/ActionButton.jsx":
/*!*****************************************************!*\
  !*** ./client/src/RelatedProducts/ActionButton.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActionButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ActionButton(props) {
  console.log('hello there');
}

/***/ }),

/***/ "./client/src/RelatedProducts/Lists.jsx":
/*!**********************************************!*\
  !*** ./client/src/RelatedProducts/Lists.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lists)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Recommend_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Recommend.jsx */ "./client/src/RelatedProducts/Recommend.jsx");
/* harmony import */ var _Outfit_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Outfit.jsx */ "./client/src/RelatedProducts/Outfit.jsx");
/* harmony import */ var _ListsErrorBoundry_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListsErrorBoundry.jsx */ "./client/src/RelatedProducts/ListsErrorBoundry.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





// using example product data for rendering before state for currentItem
// Main List component holds both product recommendation list and outfit list


var Lists = /*#__PURE__*/function (_React$Component) {
  _inherits(Lists, _React$Component);
  var _super = _createSuper(Lists);
  function Lists(props) {
    var _this;
    _classCallCheck(this, Lists);
    _this = _super.call(this, props);
    _this.state = {
      currentItem: {
        category: 'shoes',
        images: 'needs image url in state',
        description: 'red shoes with the steve madden heel',
        price: 250,
        size: 10
      },
      recList: [],
      outfitList: [{
        category: 'socks',
        images: 'socksOne',
        description: 'socksTwo',
        price: 10,
        size: 10
      }, {
        category: 'pants',
        images: 'needs image url in state',
        description: 'red shoes with the steve madden heel',
        price: 250,
        size: 10
      }, {
        category: 'shirt',
        images: 'needs image url in state',
        description: 'red shoes with the steve madden heel',
        price: 250,
        size: 10
      }, {
        category: 'underwear',
        images: 'needs image url in state',
        description: 'red shoes with the steve madden heel',
        price: 250,
        size: 10
      }, {
        category: 'socks',
        images: 'socksOne',
        description: 'socksTwo',
        price: 10,
        size: 10
      }, {
        category: 'pants',
        images: 'needs image url in state',
        description: 'red shoes with the steve madden heel',
        price: 250,
        size: 10
      }, {
        category: 'shirt',
        images: 'needs image url in state',
        description: 'red shoes with the steve madden heel',
        price: 250,
        size: 10
      }, {
        category: 'underwear',
        images: 'needs image url in state',
        description: 'red shoes with the steve madden heel',
        price: 250,
        size: 10
      }]
    };
    return _this;
  }

  // remove the target input from outfitList array when use clicks the minus button in the outfit list
  _createClass(Lists, [{
    key: "removeOutfit",
    value: function removeOutfit(input) {
      var arr = this.state.outfitList;
      var removeIndex = arr.indexOf(input);
      arr = arr.splice(removeIndex, 1);
      this.setState({
        outfitList: arr
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ListsErrorBoundry_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: ["Similar Products", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Recommend_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
            recLists: this.state.currentItem
          }), "Your Outfit", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Outfit_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            outfitLists: this.state.outfitList,
            removeOutfits: this.removeOutfit.bind(this)
          })]
        })
      });
    }
  }]);
  return Lists;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./client/src/RelatedProducts/ListsErrorBoundry.jsx":
/*!**********************************************************!*\
  !*** ./client/src/RelatedProducts/ListsErrorBoundry.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ListErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ListErrorBoundary, _React$Component);
  var _super = _createSuper(ListErrorBoundary);
  function ListErrorBoundary(props) {
    var _this;
    _classCallCheck(this, ListErrorBoundary);
    _this = _super.call(this, props);
    _this.state = {
      error: null,
      errorInfo: null
    };
    return _this;
  }
  _createClass(ListErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
      // You can also log error messages to an error reporting service here
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.errorInfo) {
        // Error path
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
            children: "Something went wrong."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("details", {
            style: {
              whiteSpace: 'pre-wrap'
            },
            children: [this.state.error && this.state.error.toString(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), this.state.errorInfo.componentStack]
          })]
        });
      }
      // Normally, just render children
      return this.props.children;
    }
  }]);
  return ListErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListErrorBoundary);

/***/ }),

/***/ "./client/src/RelatedProducts/Outfit.jsx":
/*!***********************************************!*\
  !*** ./client/src/RelatedProducts/Outfit.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Outfit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


// Outfit only reads current outfit state from main List component


var Outfit = /*#__PURE__*/function (_React$Component) {
  _inherits(Outfit, _React$Component);
  var _super = _createSuper(Outfit);
  function Outfit(props) {
    var _this;
    _classCallCheck(this, Outfit);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  // element loops through the outfit list and displays each item
  // this will be expanded upon as the incoming data is updated
  _createClass(Outfit, [{
    key: "element",
    value: function element() {
      var outfitMap = this.props.outfitLists.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          id: "outfit",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            children: [item.category, ",", item.price]
          })
        }, index);
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        id: "outfitScroll",
        children: outfitMap
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: this.element()
      });
    }
  }]);
  return Outfit;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./client/src/RelatedProducts/Recommend.jsx":
/*!**************************************************!*\
  !*** ./client/src/RelatedProducts/Recommend.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Recommend)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ActionButton_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionButton.jsx */ "./client/src/RelatedProducts/ActionButton.jsx");
/* harmony import */ var _Product_Overview_productOverview_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Product Overview/productOverview.jsx */ "./client/src/Product Overview/productOverview.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Recommend = /*#__PURE__*/function (_React$Component) {
  _inherits(Recommend, _React$Component);
  var _super = _createSuper(Recommend);
  function Recommend(props) {
    var _example;
    var _this;
    _classCallCheck(this, Recommend);
    _this = _super.call(this, props);
    _this.state = {
      productList: [],
      productIdList: [],
      example: (_example = {
        id: 71701,
        campus: 'hr-rpp',
        name: 'Pumped Up Kicks',
        slogan: 'Faster than a just about anything',
        description: 'The Pumped Up serves up crisp court style with a m…upple leather upper and a classic rubber cupsole.',
        features: [{
          feature: 'Sole',
          value: 'test'
        }, {
          feature: 'Material',
          value: 'FullControlSkin'
        }, {
          feature: 'Mid-Sole',
          value: 'ControlSupport Arch Bridge'
        }, {
          feature: 'Stitching',
          value: 'Double Stitch'
        }],
        image: "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
      }, _defineProperty(_example, "name", "Pumped Up Kicks"), _defineProperty(_example, "slogan", "Faster than a just about anything"), _defineProperty(_example, "updated_at", "2022-05-11T19:38:15.373Z"), _example),
      display: [],
      displayCount: 3,
      currentPosition: 0,
      clikedProduct: null,
      popup: false
    };
    return _this;
  }

  // pull all related products from server with this category and return an array of mapped items
  _createClass(Recommend, [{
    key: "pull",
    value: function pull() {
      var _this2 = this;
      var setDisplay, setProductList, setImage, setRatings;
      axios__WEBPACK_IMPORTED_MODULE_1__({
        method: 'get',
        url: '/relatedProducts',
        params: {
          id: this.state.example.id
        }
      }).then(function (response) {
        setDisplay = [response.data[0], response.data[1], response.data[2]];
        setProductList = response.data;
        setProductList.forEach(function (item) {
          console.log(item);
          axios__WEBPACK_IMPORTED_MODULE_1__.get('/productOverview/styles/' + item.id).then(function (response) {
            item.image = response.data.results[0].photos[0].thumbnail_url;
          });
          axios__WEBPACK_IMPORTED_MODULE_1__.get('/relatedPrdouctsReviews/' + item.id).then(function (response) {
            var arrayOfRatings = [];
            for (var i = 0; i < response.data.results.length; i++) {
              arrayOfRatings.push(response.data.results[i].rating);
            }
            var average = function average(arrayOfRatings) {
              return arrayOfRatings.reduce(function (a, b) {
                return a + b;
              }) / arrayOfRatings.length;
            };
            var avg = average(arrayOfRatings);
            item.rating = avg;
            _this2.setState({
              productList: setProductList,
              display: setDisplay
            });
          });
        });
      });
    }

    // render items in state and display each as a div
  }, {
    key: "element",
    value: function element(input) {
      var _this3 = this;
      var recMap = input.map(function (item, index) {
        //console.log(item)
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          id: "productRec",
          onClick: _Product_Overview_productOverview_jsx__WEBPACK_IMPORTED_MODULE_4__["default"],
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            onClick: function onClick() {
              _this3.setState({
                popup: !_this3.state.popup,
                clickedProduct: item
              });
            },
            style: {
              position: 'absolute'
            },
            children: "\u2605"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            id: "productRecInfo",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              id: "productRecInfoImage",
              src: item.image
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              id: "productRecInfoCategory",
              children: item.category
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              id: "productRecInfoName",
              children: item.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              id: "productRecInfoPrice",
              children: ["$", item.default_price]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              rating: item.rating,
              widgetRatedColors: "black",
              widgetDimensions: "15px",
              widgetSpacings: "1px",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {})]
            })]
          })]
        }, index);
      });
      //console.log(recMap)
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: recMap
        })
      });
    }

    //right arrow function
  }, {
    key: "rightArrow",
    value: function rightArrow() {
      var current = this.state.currentPosition + 1;
      var arr = this.state.display;
      arr.shift();
      //console.log(current)
      arr.push(this.state.productList[this.state.displayCount - 1 + current]);
      //console.log(arr)
      this.setState({
        display: arr,
        currentPosition: current
      });
    }

    //left arrow function
  }, {
    key: "leftArrow",
    value: function leftArrow() {
      var current = this.state.currentPosition - 1;
      var arr = this.state.display;
      arr.pop();
      arr.unshift(this.state.productList[current]);
      this.setState({
        display: arr,
        currentPosition: current
      });
    }

    // popup when an the state is changed from an image click
  }, {
    key: "popupFunc",
    value: function popupFunc(e) {
      // function to return the specific line that includes a check mark, the feature name, and another check mark
      var key = 0; // counter for key reference in html
      var compareTd = function compareTd(option, feature) {
        if (option === 'option1') {
          // returning check to both sides
          key++;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
              children: "\u2714"
            }, key), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
              children: [feature.feature, " : ", feature.value]
            }, key + 1), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
              children: "\u2714"
            }, key + 2)]
          }, key + 3);
        } else if (option === 'option2') {
          // returning check to left side only
          key++;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
              children: "\u2714"
            }, key), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
              children: [feature.feature, " : ", feature.value]
            }, key + 1), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {}, key + 2)]
          }, key + 3);
        } else if (option === 'option3') {
          // returning check to right side only
          key++;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {}, key), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
              children: [feature.feature, " : ", feature.value]
            }, key + 1), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
              children: "\u2714"
            }, key + 2)]
          }, key + 3);
        }
      };

      // function to map through list of features and create the table with appropriate check marks if shared features
      // Im so sorry Zach... this is ugly af O(n^n) it feels like
      // the good new is it worked basically the first time I ran it :D
      var mapFeatures = function mapFeatures() {
        var beginning = [];
        var beginningFullItem = [];
        var endLeft = [];
        var endRight = [];
        //console.log(e.example.features, e.clickedProduct.features)
        e.example.features.forEach(function (item) {
          e.clickedProduct.features.forEach(function (item2) {
            if (item.feature === item2.feature && item.value === item2.value) {
              beginning.push(item.value);
              beginningFullItem.push(item);
            }
          });
        });
        e.example.features.forEach(function (item) {
          if (!beginning.includes(item.value)) {
            endLeft.push(item);
          }
        });
        e.clickedProduct.features.forEach(function (item) {
          if (!beginning.includes(item.value)) {
            endRight.push(item);
          }
        });
        var arrayOfArrays = [beginningFullItem, endLeft, endRight];
        var count = 1;
        var result = [];
        var _loop = function _loop() {
          var option = 'option' + count.toString();
          count++;
          arrayOfArrays[i].map(function (item) {
            return result.push(compareTd(option, item));
          });
        };
        for (var i = 0; i < arrayOfArrays.length; i++) {
          _loop();
        }
        //console.log(arrayOfArrays)
        return result;
      };
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        id: "compareBox",
        children: ["Comparing", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("table", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                id: "compareName",
                children: this.state.example.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                children: "    "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                id: "compareName",
                children: this.state.clickedProduct.name
              })]
            }), mapFeatures()]
          })
        })]
      });
    }

    // run async pull request to populate current state of products
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.pull();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        id: "productRecScroll",
        children: [this.state.currentPosition === 0 ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          id: "leftArrow",
          onClick: this.leftArrow.bind(this),
          children: "<"
        }), this.element(this.state.display), this.state.popup ? this.popupFunc(this.state) : null, this.state.currentPosition + this.state.displayCount >= this.state.productList.length ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          id: "rightArrow",
          onClick: this.rightArrow.bind(this),
          children: ">"
        })]
      });
    }
  }]);
  return Recommend;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./client/src/Reviews/ReviewIndex.jsx":
/*!********************************************!*\
  !*** ./client/src/Reviews/ReviewIndex.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewIndex)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_List_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/List.jsx */ "./client/src/Reviews/components/List.jsx");
/* harmony import */ var _components_RatingsOverview_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/RatingsOverview.jsx */ "./client/src/Reviews/components/RatingsOverview.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var ReviewIndex = /*#__PURE__*/function (_React$Component) {
  _inherits(ReviewIndex, _React$Component);
  var _super = _createSuper(ReviewIndex);
  function ReviewIndex(props) {
    var _this;
    _classCallCheck(this, ReviewIndex);
    _this = _super.call(this, props);
    _this.state = {
      reviews: []
    };
    _this.getReviews = _this.getReviews.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(ReviewIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getReviews('relevant');
    }
  }, {
    key: "getReviews",
    value: function getReviews() {
      var _this2 = this;
      var sort = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'relevant';
      axios__WEBPACK_IMPORTED_MODULE_4__.get("/reviews/71720/".concat(sort)).then(function (data) {
        //console.log('DATA IN Reviews COMPONENT \n', data.data.results)
        _this2.setState({
          reviews: data.data.results
        });
      })["catch"](function (err) {
        console.log('ERR IN GET REVIEWS \n', err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "reviewsOverview",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "reviewsTitle",
          children: "RATINGS & REVIEWS"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mainContainer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "Ratings",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_RatingsOverview_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "Reviews",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "sorting",
              children: [this.state.reviews.length, " reviews, sorted by ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
                  className: "dropdown",
                  onChange: function onChange(e) {
                    return _this3.getReviews(e.target.value);
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                    className: "dropdownSelect",
                    value: "relevance",
                    children: "relevance"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                    className: "dropdownSelect",
                    value: "helpful",
                    children: "helpful"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                    className: "dropdownSelect",
                    value: "newest",
                    children: "newest"
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_List_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
              reviews: this.state.reviews
            })]
          })]
        })]
      });
    }
  }]);
  return ReviewIndex;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./client/src/Reviews/components/List.jsx":
/*!************************************************!*\
  !*** ./client/src/Reviews/components/List.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _Tile_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile.jsx */ "./client/src/Reviews/components/Tile.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var List = /*#__PURE__*/function (_React$Component) {
  _inherits(List, _React$Component);
  var _super = _createSuper(List);
  function List(props) {
    var _this;
    _classCallCheck(this, List);
    _this = _super.call(this, props);
    _this.state = {
      itemsToShow: 2,
      fullyExpanded: false
    };
    _this.showMoreOrCollapse = _this.showMoreOrCollapse.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(List, [{
    key: "showMoreOrCollapse",
    value: function showMoreOrCollapse() {
      if (this.state.fullyExpanded === true) {
        this.setState({
          itemsToShow: 2,
          fullyExpanded: false
        });
      } else {
        this.setState({
          itemsToShow: this.state.itemsToShow + 2
        });
        if (this.state.itemsToShow + 2 >= this.props.reviews.length) {
          this.setState({
            itemsToShow: this.props.reviews.length,
            fullyExpanded: true
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.reviews.length === 0) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            children: "Add A Review"
          })
        });
      } else if (this.props.reviews.length <= 2) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [this.props.reviews.slice(0, this.state.itemsToShow).map(function (review) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tile_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
              review: review
            }, review.review_id);
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            children: "Add A Review"
          })]
        });
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "scrollableReviews",
            children: this.props.reviews.slice(0, this.state.itemsToShow).map(function (review) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tile_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
                review: review
              }, review.review_id);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            className: "reviewsListButton reviewsToggleButton",
            onClick: this.showMoreOrCollapse,
            children: this.state.fullyExpanded && this.state.itemsToShow >= this.props.reviews.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              onClick: this.showMoreOrCollapse,
              children: "Collapse"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              onClick: this.showMoreOrCollapse,
              children: "More Reviews"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            className: "reviewsListButton",
            children: "Add A Review +"
          })]
        });
      }
    }
  }]);
  return List;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ }),

/***/ "./client/src/Reviews/components/RatingsOverview.jsx":
/*!***********************************************************!*\
  !*** ./client/src/Reviews/components/RatingsOverview.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-progress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var RatingsOverview = /*#__PURE__*/function (_React$Component) {
  _inherits(RatingsOverview, _React$Component);
  var _super = _createSuper(RatingsOverview);
  function RatingsOverview(props) {
    var _this;
    _classCallCheck(this, RatingsOverview);
    _this = _super.call(this, props);
    _this.state = {
      rating1: '',
      rating2: '',
      rating3: '',
      rating4: '',
      rating5: '',
      average: '',
      percent1: '',
      percent2: '',
      percent3: '',
      percent4: '',
      percent5: '',
      recommended: [],
      size: '',
      width: '',
      comfort: '',
      quality: '',
      length: '',
      fit: ''
    };
    _this.getMetaData = _this.getMetaData.bind(_assertThisInitialized(_this));
    _this.filterRatingsClick = _this.filterRatingsClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(RatingsOverview, [{
    key: "filterRatingsClick",
    value: function filterRatingsClick(e) {
      var ratingNum = Number(e.target.innerText.substr(0, 1));
      console.log('clicked on ratings!', ratingNum);
      this.props.filterByRating(ratingNum);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getMetaData();
    }
  }, {
    key: "getMetaData",
    value: function getMetaData() {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_3__.get("/meta/".concat(this.props.product_id, "/")).then(function (data) {
        //console.log('FRONT END META DATA \n', data.data.characteristics)
        _this2.setState({
          rating1: Number(data.data.ratings[1]),
          rating2: Number(data.data.ratings[2]),
          rating3: Number(data.data.ratings[3]),
          rating4: Number(data.data.ratings[4]),
          rating5: Number(data.data.ratings[5]),
          average: ((5 * Number(data.data.ratings[5]) + 4 * Number(data.data.ratings[4]) + 3 * Number(data.data.ratings[3]) + 2 * Number(data.data.ratings[2]) + 1 * Number(data.data.ratings[1])) / (Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3]) + Number(data.data.ratings[2]) + Number(data.data.ratings[1]))).toFixed(1),
          recommended: (Number(data.data.recommended["true"]) / (Number(data.data.recommended["false"]) + Number(data.data.recommended["true"])) * 100).toFixed(0),
          percent1: Number(data.data.ratings[1]) / (Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3]) + Number(data.data.ratings[2]) + Number(data.data.ratings[1])) * 100,
          percent2: Number(data.data.ratings[2]) / (Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3]) + Number(data.data.ratings[2]) + Number(data.data.ratings[1])) * 100,
          percent3: Number(data.data.ratings[3]) / (Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3]) + Number(data.data.ratings[2]) + Number(data.data.ratings[1])) * 100,
          percent4: Number(data.data.ratings[4]) / (Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3]) + Number(data.data.ratings[2]) + Number(data.data.ratings[1])) * 100,
          percent5: Number(data.data.ratings[5]) / (Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3]) + Number(data.data.ratings[2]) + Number(data.data.ratings[1])) * 100
        });
        if (data.data.characteristics.Size !== undefined) {
          _this2.setState({
            size: Number(data.data.characteristics.Size.value / 5 * 100)
          });
        }
        if (data.data.characteristics.Width !== undefined) {
          _this2.setState({
            width: Number(data.data.characteristics.Width.value / 5 * 100)
          });
        }
        if (data.data.characteristics.Comfort !== undefined) {
          _this2.setState({
            comfort: Number(data.data.characteristics.Comfort.value / 5 * 100)
          });
        }
        if (data.data.characteristics.Quality !== undefined) {
          _this2.setState({
            quality: Number(data.data.characteristics.Quality.value / 5 * 100)
          });
        }
        if (data.data.characteristics.Fit !== undefined) {
          _this2.setState({
            fit: Number(data.data.characteristics.Fit.value / 5 * 100)
          });
        }
        if (data.data.characteristics.Length !== undefined) {
          _this2.setState({
            length: Number(data.data.characteristics.Length.value / 5 * 100)
          });
        }
      })["catch"](function (err) {
        console.log('ERR IN META GET REVIEWS \n', err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "avgRating",
          children: [this.state.average, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "ratingStar",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              rating: Number(this.state.average),
              widgetRatedColors: "black",
              widgetDimensions: "15px",
              widgetSpacings: "1px",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {})]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "percentageRecommended",
          children: [this.state.recommended, "% of reviewers recommend this product"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "ratingsLink",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "floatLeft",
            onClick: this.filterRatingsClick,
            children: "5 stars"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "floatRight",
            children: [this.state.rating5, " rating(s)"]
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-progress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            percent: this.state.percent5,
            strokeLinecap: 'square',
            strokeWidth: 4,
            trailWidth: 4,
            trailColor: "#D3D3D3",
            strokeColor: "black",
            className: "ratingsBar"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "ratingsLink",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "floatLeft",
            onClick: this.filterRatingsClick,
            children: " 4 stars"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "floatRight",
            children: [this.state.rating4, " rating(s)"]
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-progress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            percent: this.state.percent4,
            strokeLinecap: 'square',
            strokeWidth: 4,
            trailWidth: 4,
            trailColor: "#D3D3D3",
            strokeColor: "black",
            className: "ratingsBar"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "ratingsLink",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "floatLeft",
            onClick: this.filterRatingsClick,
            children: " 3 stars"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "floatRight",
            children: [this.state.rating3, " rating(s)"]
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-progress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            percent: this.state.percent3,
            strokeLinecap: 'square',
            strokeWidth: 4,
            trailWidth: 4,
            trailColor: "#D3D3D3",
            strokeColor: "black",
            className: "ratingsBar"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "ratingsLink",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "floatLeft",
            onClick: this.filterRatingsClick,
            children: " 2 stars"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "floatRight",
            children: [this.state.rating2, " rating(s)"]
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-progress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            percent: this.state.percent2,
            strokeLinecap: 'square',
            strokeWidth: 4,
            trailWidth: 4,
            trailColor: "#D3D3D3",
            strokeColor: "black",
            className: "ratingsBar"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "ratingsLink",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "floatLeft",
            onClick: this.filterRatingsClick,
            children: " 1 star"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "floatRight",
            children: [this.state.rating1, " rating(s)"]
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-progress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            percent: this.state.percent1,
            strokeLinecap: 'square',
            strokeWidth: 4,
            trailWidth: 4,
            trailColor: "#D3D3D3",
            strokeColor: "black",
            className: "ratingsBar"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "characteristicsBreakdown",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), this.state.size !== '' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "characteristics",
              children: ["Size ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-progress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                percent: [this.state.size, .2],
                gapPosition: "top",
                strokeLinecap: 'square',
                strokeWidth: 4,
                trailWidth: 4,
                trailColor: "#D3D3D3",
                strokeColor: ["#D3D3D3", "black"],
                className: "ratingsBar"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "charLabel",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charLeft",
                children: "Too small"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charMid",
                children: "Perfect"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charRight",
                children: "Too large"
              })]
            })]
          }) : null, this.state.width !== '' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "characteristics",
              children: ["Width ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-progress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                percent: [this.state.width, .2],
                gapPosition: "top",
                strokeLinecap: 'square',
                strokeWidth: 4,
                trailWidth: 4,
                trailColor: "#D3D3D3",
                strokeColor: ["#D3D3D3", "black"],
                className: "ratingsBar"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "charLabel",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charLeft",
                children: "Too narrow"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charMid",
                children: "Perfect"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charRight",
                children: "Too wide"
              })]
            })]
          }) : null, this.state.comfort !== '' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "characteristics",
              children: ["Comfort ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-progress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                percent: [this.state.comfort, .2],
                gapPosition: "top",
                strokeLinecap: 'square',
                strokeWidth: 4,
                trailWidth: 4,
                trailColor: "#D3D3D3",
                strokeColor: ["#D3D3D3", "black"],
                className: "ratingsBar"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "charLabel",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charLeft",
                children: "Uncomfortable"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charMid",
                children: "Ok"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charRight",
                children: "Perfect"
              })]
            })]
          }) : null, this.state.quality !== '' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "characteristics",
              children: ["Quality ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-progress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                percent: [this.state.quality, .2],
                gapPosition: "top",
                strokeLinecap: 'square',
                strokeWidth: 4,
                trailWidth: 4,
                trailColor: "#D3D3D3",
                strokeColor: ["#D3D3D3", "black"],
                className: "ratingsBar"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "charLabel",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charLeft",
                children: "Poor"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charMid",
                children: "What I expected"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charRight",
                children: "Great"
              })]
            })]
          }) : null, this.state.length !== '' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "characteristics",
              children: ["Length ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-progress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                percent: [this.state.length, .2],
                gapPosition: "top",
                strokeLinecap: 'square',
                strokeWidth: 4,
                trailWidth: 4,
                trailColor: "#D3D3D3",
                strokeColor: ["#D3D3D3", "black"],
                className: "ratingsBar"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "charLabel",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charLeft",
                children: "Runs short"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charMid",
                children: "Perfect"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charRight",
                children: "Runs long"
              })]
            })]
          }) : null, this.state.fit !== '' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "characteristics",
              children: ["Fit ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-progress'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                percent: [this.state.fit, .2],
                gapPosition: "top",
                strokeLinecap: 'square',
                strokeWidth: 4,
                trailWidth: 4,
                trailColor: "#D3D3D3",
                strokeColor: ["#D3D3D3", "black"],
                className: "ratingsBar"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "charLabel",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charLeft",
                children: "Runs tight"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charMid",
                children: "Perfect"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "charRight",
                children: "Runs long"
              })]
            })]
          }) : null]
        })]
      });
    }
  }]);
  return RatingsOverview;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RatingsOverview);

/***/ }),

/***/ "./client/src/Reviews/components/Tile.jsx":
/*!************************************************!*\
  !*** ./client/src/Reviews/components/Tile.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Tile = /*#__PURE__*/function (_React$Component) {
  _inherits(Tile, _React$Component);
  var _super = _createSuper(Tile);
  function Tile(props) {
    var _this;
    _classCallCheck(this, Tile);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "clickHelpful", function (id) {
      console.log('clicked', id, _this.state.helpfulIncrease);
      if (_this.state.helpfulOnce === false) {
        axios__WEBPACK_IMPORTED_MODULE_2__.put('/reviewHelpful', {
          review_id: id
        }).then(function (data) {
          console.log('Success sending helpful put to server', data);
          _this.setState({
            helpfulIncrease: _this.props.review.helpfulness + 1,
            helpfulOnce: true
          });
        })["catch"](function (err) {
          console.log('Err sending helpful put to server', err);
        });
      }
    });
    _this.state = {
      bodyCharactersToShow: 250,
      expanded: false,
      modalOpen: false,
      clickedPhotoURL: '',
      clickedHelpfulID: '',
      helpfulIncrease: _this.props.review.helpfulness,
      helpfulOnce: false
    };
    _this.toggleBody = _this.toggleBody.bind(_assertThisInitialized(_this));
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    _this.clickHelpful = _this.clickHelpful.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Tile, [{
    key: "toggleBody",
    value: function toggleBody() {
      if (this.state.expanded === true) {
        this.setState({
          bodyCharactersToShow: 250,
          expanded: false
        });
      } else {
        this.setState({
          bodyCharactersToShow: this.props.review.body.length,
          expanded: true
        });
      }
    }
  }, {
    key: "toggleModal",
    value: function toggleModal(photoURL) {
      this.setState({
        clickedPhotoURL: photoURL
      });
      if (this.state.modalOpen === true) {
        this.setState({
          modalOpen: false
        });
      } else {
        this.setState({
          modalOpen: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "tile",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          rating: this.props.review.rating,
          widgetRatedColors: "black",
          widgetDimensions: "15px",
          widgetSpacings: "1px",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-ratings-declarative'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {})]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "userAndDate",
            children: [this.props.review.reviewer_name, ", ", Object(function webpackMissingModule() { var e = new Error("Cannot find module 'date-fns'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(new Date(this.props.review.date), 'MMMM dd, yyyy')]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
            className: "summary",
            children: this.props.review.summary
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "bodyText",
            children: [this.props.review.body.slice(0, this.state.bodyCharactersToShow), this.props.review.body.length > 250 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                className: "bodyButton",
                onClick: this.toggleBody,
                children: this.state.expanded && this.props.review.body.length > 250 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  children: "Show Less"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  children: "Show more"
                })
              })
            }) : null]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "photoContainer",
          children: this.props.review.photos.slice(0, 5).map(function (photo) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                className: "reviewPhoto",
                onClick: function onClick() {
                  return _this2.toggleModal(photo.url);
                },
                src: photo.url,
                alt: photo.id
              }, photo.id)
            }, photo.id);
          })
        }), this.state.modalOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "specificModalPhoto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
            onClick: this.toggleModal,
            src: this.state.clickedPhotoURL
          })
        }) : null, this.props.review.response !== null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "response",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
            children: "Response from seller:"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            children: this.props.review.response.slice(1, this.props.review.response.length - 1)
          })]
        }) : null, this.props.review.recommend ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "recommend",
          children: "\u2713 I recommend this product"
        }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "helpful",
          children: ["Helpful? ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("u", {
            className: "helpfulYes",
            onClick: function onClick() {
              return _this2.clickHelpful(_this2.props.review.review_id);
            },
            children: "Yes"
          }), " (", this.state.helpfulIncrease, ") \u2002 | \u2002", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("u", {
            onClick: function onClick() {
              alert('This review was reported.');
            },
            children: "Report"
          })]
        })]
      });
    }
  }]);
  return Tile;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tile);

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kenkurita/hackreactor/FEC/node_modules/axios/index.js'");

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kenkurita/hackreactor/FEC/node_modules/react-dom/client.js'");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kenkurita/hackreactor/FEC/node_modules/react-dom/index.js'");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kenkurita/hackreactor/FEC/node_modules/react/index.js'");

/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kenkurita/hackreactor/FEC/node_modules/react/jsx-runtime.js'");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _QuestionsAnswers_Questions_Answers_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionsAnswers/Questions&Answers.jsx */ "./client/src/QuestionsAnswers/Questions&Answers.jsx");
/* harmony import */ var _Product_Overview_productOverview_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product Overview/productOverview.jsx */ "./client/src/Product Overview/productOverview.jsx");
/* harmony import */ var _Reviews_ReviewIndex_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Reviews/ReviewIndex.jsx */ "./client/src/Reviews/ReviewIndex.jsx");
/* harmony import */ var _RelatedProducts_Lists_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RelatedProducts/Lists.jsx */ "./client/src/RelatedProducts/Lists.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);
  var _super = _createSuper(App);
  function App(props) {
    var _this;
    _classCallCheck(this, App);
    _this = _super.call(this, props);
    _this.state = {
      product_id: 71701
    };
    return _this;
  }
  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Product_Overview_productOverview_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
          product_id: this.state.product_id
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RelatedProducts_Lists_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
          product_id: this.state.product_id
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_QuestionsAnswers_Questions_Answers_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          product_id: this.state.product_id
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Reviews_ReviewIndex_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          product_id: this.state.product_id
        })]
      });
    }
  }]);
  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('root')).render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(App, {}));
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map