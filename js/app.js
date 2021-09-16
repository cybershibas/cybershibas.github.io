"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

$(document).ready(function () {
  // animation init
  AOS.init(); // $('.js-popup-open').on('click', function () {
  //   $('.js-popup').fadeIn()
  //   $('.js-mask').fadeIn()
  //   $('body').addClass('overflow')
  // })
  // popup

  $('.js-popup-close, .js-mask').on('click', function () {
    $('.js-popup').fadeOut();
    $('.js-mask').fadeOut();
    $('body').removeClass('overflow');
  }); // accordion

  $(function () {
    $('.accordion__item .accordion__title-wrap').on('click', function (e) {
      e.preventDefault();
      var $this = $(this);

      if (!$this.hasClass('active')) {
        $('.accordion__content').slideUp(400);
        $('.accordion__item .accordion__title-wrap').removeClass('active');
        $('.accordion__item').removeClass('active');
      }

      $this.toggleClass('active');
      $this.parent().toggleClass('active');
      $this.next().slideToggle();
    });
  }); //anchor

  $('a[href^="#"]').click(function () {
    var href = $.attr(this, 'href');
    $('.js-burger').removeClass('active');
    $('.js-nav').removeClass('active');
    $('body').removeClass('overflow');
    $('html, body').animate({
      scrollTop: $(href).offset().top - 40
    }, 1000);
    return false;
  }); //burger

  if (document.querySelector('.js-burger')) {
    var BURGER = document.querySelector('.js-burger');
    var NAV = document.querySelector('.js-nav');
    var BODY = document.querySelector('body');
    var OVERFLOW = 'overflow';
    var ACTIVE = 'active';
    BURGER.addEventListener('click', function () {
      BURGER.classList.toggle(ACTIVE);
      NAV.classList.toggle(ACTIVE);
      BODY.classList.toggle(OVERFLOW);
    });
  } // slider


  var swiper = new Swiper('.js-item-slider', {
    loop: true,
    autoplay: {
      delay: 400,
      disableOnInteraction: false
    },
    autoplayDisableOnInteraction: true,
    slidersPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });
}); //window height

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
window.addEventListener('resize', function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
});
var arrOfData = [{
  counter: 1,
  setData: [{
    srcImg: 'images/o01.png',
    textBtn: 'SHIBA C42-V'
  }, {
    srcImg: 'images/o02.png',
    textBtn: 'SHIBA C37-V'
  }, {
    srcImg: 'images/o03.png',
    textBtn: 'SHIBA C43-V'
  }]
}, {
  counter: 1,
  setData: [{
    srcImg: 'images/o11.png',
    textBtn: 'SHIBA C41-V'
  }, {
    srcImg: 'images/o12.png',
    textBtn: 'SHIBA C44-V'
  }, {
    srcImg: 'images/o13.png',
    textBtn: 'SHIBA C38-V'
  }]
}, {
  counter: 1,
  setData: [{
    srcImg: 'images/o21.png',
    textBtn: 'SHIBA C39-V'
  }, {
    srcImg: 'images/o22.png',
    textBtn: 'SHIBA C42-V'
  }, {
    srcImg: 'images/o23.png',
    textBtn: 'SHIBA C36-V'
  }]
}];
var cardWrap = document.querySelector('.card-wrap');
cardWrap.addEventListener('click', function (event) {
  if (!event.target.closest('.card__img-wrap') && !event.target.closest('.card__link')) {
    return;
  }

  var indexCard = Array.from(cardWrap.children).findIndex(function (item) {
    return item === event.target.closest('.card');
  });
  var neededData = arrOfData[indexCard];

  if (neededData.counter === neededData.setData.length) {
    neededData.counter = 0;
  }

  var targetCard = Array.from(cardWrap.children).find(function (item) {
    return item === event.target.closest('.card');
  });
  var cardImg = targetCard.querySelector('img');
  var cardBtn = targetCard.querySelector('button');
  cardImg.src = neededData.setData[neededData.counter].srcImg;
  cardBtn.textContent = neededData.setData[neededData.counter].textBtn;
  neededData.counter += 1;
}); // WEB 3

$(document).ready( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
  return regeneratorRuntime.wrap(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          // await tryConnect()
          $(function () {
            $('.connect-button').on('click', /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        e.preventDefault();
                        _context.next = 3;
                        return tryConnect();

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }()); // Mint button

            $('.mint-button').on('click', /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
                var totalToMint;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        e.preventDefault();
                        totalToMint = $('.mint-input').val().toString();

                        if (totalToMint) {
                          _context2.next = 4;
                          break;
                        }

                        return _context2.abrupt("return");

                      case 4:
                        _context2.next = 6;
                        return mint(totalToMint);

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }()); // Plus button

            $('.input-wrap-right').on('click', /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
                var totalToMint;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        e.preventDefault();
                        totalToMint = $('.mint-input').val();

                        if (!totalToMint) {
                          totalToMint = 1;
                        } else if (+totalToMint + 1 > 20) {
                          totalToMint = 20;
                        } else totalToMint++;

                        $('.mint-input').val(+totalToMint);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x3) {
                return _ref4.apply(this, arguments);
              };
            }()); // Five button

            $('.input-five-button').on('click', /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        e.preventDefault();
                        $('.mint-input').val(5);

                      case 2:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x4) {
                return _ref5.apply(this, arguments);
              };
            }()); // Ten button

            $('.input-ten-button').on('click', /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        e.preventDefault();
                        $('.mint-input').val(10);

                      case 2:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x5) {
                return _ref6.apply(this, arguments);
              };
            }()); // Twenty button

            $('.input-twenty-button').on('click', /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        e.preventDefault();
                        $('.mint-input').val(20);

                      case 2:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              return function (_x6) {
                return _ref7.apply(this, arguments);
              };
            }()); // Left button

            $('.input-wrap-left').on('click', /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
                var totalToMint;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        e.preventDefault();
                        totalToMint = $('.mint-input').val();

                        if (!totalToMint || +totalToMint - 1 < 1) {
                          totalToMint = 1;
                        } else totalToMint--;

                        $('.mint-input').val(totalToMint);

                      case 4:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));

              return function (_x7) {
                return _ref8.apply(this, arguments);
              };
            }());
          }); // Input handler

          $('.mint-input').on('input', /*#__PURE__*/function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
              var totalToMint;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      e.preventDefault();
                      totalToMint = $('.mint-input').val();

                      if (totalToMint < 1) {
                        $('.mint-input').val(1);
                      }

                      if (totalToMint > 20) {
                        $('.mint-input').val(20);
                      }

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));

            return function (_x8) {
              return _ref9.apply(this, arguments);
            };
          }());

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _callee9);
}))); // Unpkg imports

var Web3Modal = window.Web3Modal["default"];
var WalletConnectProvider = window.WalletConnectProvider["default"]; // Web3modal instance

var web3Modal; // Chosen wallet provider given by the dialog window

var provider;

function init() {
  var providerOptions = {
    walletconnect: {
      "package": WalletConnectProvider,
      options: {
        infuraId: "7c125f9ad4be41b6b704e0125a60ffa1"
      }
    }
  };
  web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: false,
    // optional
    providerOptions: providerOptions,
    // required
    disableInjectedProvider: false,
    // optional. For MetaMask / Brave / Opera.
    theme: {
      background: "#0f1317",
      main: "rgb(199, 199, 199)",
      secondary: "rgb(136, 136, 136)",
      border: "1px solid #10fdff",
      hover: "rgb(16, 26, 32)",
      borderRadius: "2px"
    }
  });
}

window.addEventListener('load', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
  return regeneratorRuntime.wrap(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          init();
          getMinted();
          document.querySelector(".js-popup-open").addEventListener("click", tryConnect); // document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);

        case 3:
        case "end":
          return _context10.stop();
      }
    }
  }, _callee10);
})));

var checkNetwork = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(provider) {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            if (!provider) {
              _context11.next = 13;
              break;
            }

            _context11.prev = 1;
            _context11.next = 4;
            return provider.request({
              method: 'wallet_switchEthereumChain',
              params: [{
                chainId: '0x1'
              }]
            });

          case 4:
            return _context11.abrupt("return", true);

          case 7:
            _context11.prev = 7;
            _context11.t0 = _context11["catch"](1);
            console.error(_context11.t0);
            return _context11.abrupt("return", false);

          case 11:
            _context11.next = 15;
            break;

          case 13:
            console.error("Can't setup the network on metamask because window.ethereum is undefined");
            return _context11.abrupt("return", false);

          case 15:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 7]]);
  }));

  return function checkNetwork(_x9) {
    return _ref11.apply(this, arguments);
  };
}();

var getBalance = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var web3, address, balance, ethBalance, humanFriendlyBalance;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            web3 = new Web3(provider);
            _context12.next = 3;
            return getAccounts();

          case 3:
            address = _context12.sent[0];
            _context12.next = 6;
            return web3.eth.getBalance(address);

          case 6:
            balance = _context12.sent;
            ethBalance = web3.utils.fromWei(balance, "ether");
            humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
            return _context12.abrupt("return", humanFriendlyBalance);

          case 10:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function getBalance() {
    return _ref12.apply(this, arguments);
  };
}();

var tryConnect = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return web3Modal.connect();

          case 3:
            provider = _context14.sent;

            if (provider.chainId !== 1) {
              checkNetwork(provider);
            }

            getBalance();
            document.querySelector(".js-popup-open").style.display = "none";
            document.querySelector(".mint-button").style.display = "block";
            provider.on("disconnect", /*#__PURE__*/function () {
              var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(code, reason) {
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        console.log(code, reason);
                        document.querySelector(".js-popup-open").style.display = "block";
                        document.querySelector(".mint-button").style.display = "none"; // If the cached provider is not cleared,
                        // WalletConnect will default to the existing session
                        // and does not allow to re-scan the QR code with a new wallet.
                        // Depending on your use case you may want or want not his behavir.

                        _context13.next = 5;
                        return web3Modal.clearCachedProvider();

                      case 5:
                        provider = null;

                      case 6:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13);
              }));

              return function (_x10, _x11) {
                return _ref14.apply(this, arguments);
              };
            }());
            _context14.next = 15;
            break;

          case 11:
            _context14.prev = 11;
            _context14.t0 = _context14["catch"](0);
            console.log("Could not get a wallet connection", _context14.t0);
            return _context14.abrupt("return");

          case 15:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[0, 11]]);
  }));

  return function tryConnect() {
    return _ref13.apply(this, arguments);
  };
}();

function getAccounts() {
  return _getAccounts.apply(this, arguments);
} // async function connectMetamask() {
//   if (window.ethereum) {
//     try {
//       const result = await getAccounts()
//       if (Array.isArray(result) && result.length > 0) {
//         let acc = result[0]
//         return acc
//       } else {
//         return false
//       }
//     } catch (err) {
//       console.log(err)
//       return false
//     }
//   } else {
//     return false
//   }
// }


function _getAccounts() {
  _getAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
    var web3, acc;
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            web3 = new Web3(provider); // if (!window.ethereum) return

            _context15.prev = 1;
            _context15.next = 4;
            return web3.eth.getAccounts();

          case 4:
            acc = _context15.sent;
            return _context15.abrupt("return", acc);

          case 8:
            _context15.prev = 8;
            _context15.t0 = _context15["catch"](1);
            return _context15.abrupt("return", []);

          case 11:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[1, 8]]);
  }));
  return _getAccounts.apply(this, arguments);
}

var cost = '50000000000000000';
var contractAddress = '0xd38592f63f4f90ca3C508b5B7531aC74cDcE124A';

var getMinted = function getMinted() {
  var web3 = new Web3(new Web3.providers.HttpProvider( // 'https://rinkeby.infura.io/v3/7c125f9ad4be41b6b704e0125a60ffa1',
  'https://mainnet.infura.io/v3/7c125f9ad4be41b6b704e0125a60ffa1'));
  var contract = new web3.eth.Contract(abi, contractAddress);
  contract.methods.totalSupply().call().then(function (result) {
    $('.total-minted').text("".concat(result, " / 5000"));
  });
  setInterval(function () {
    contract.methods.totalSupply().call().then(function (result) {
      console.log(result);
      $('.total-minted').text("".concat(result, " / 5000"));
    });
  }, 300000);
};

function mint(_x12) {
  return _mint.apply(this, arguments);
} // ABI


function _mint() {
  _mint = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(totalToMint) {
    var web3, contract, balance, transactionParameters, _provider;

    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            // if (!window.ethereum) return
            // var web3 = new Web3(
            //   new Web3.providers.HttpProvider(
            //     // 'https://rinkeby.infura.io/v3/7c125f9ad4be41b6b704e0125a60ffa1',
            //     'https://mainnet.infura.io/v3/7c125f9ad4be41b6b704e0125a60ffa1'
            //   ),
            // )
            web3 = new Web3(provider); // eslint-disable-next-line @typescript-eslint/no-unused-vars

            contract = new web3.eth.Contract(abi, contractAddress);
            _context16.next = 4;
            return getBalance();

          case 4:
            balance = _context16.sent;
            console.log(+balance, " ", totalToMint * 0.05);

            if (!(+balance < totalToMint * 0.05)) {
              _context16.next = 17;
              break;
            }

            console.log('insufficient balance');
            _context16.next = 10;
            return getAccounts();

          case 10:
            _context16.t0 = _context16.sent[0];
            document.querySelector(".wallet-address").innerHTML = "at " + _context16.t0;
            document.querySelector(".funds-need").innerHTML = "You need " + (totalToMint * 0.05).toFixed(2) + " ETH + GAS fee";
            $('.js-popup').fadeIn();
            $('.js-mask').fadeIn();
            $('body').addClass('overflow');
            return _context16.abrupt("return");

          case 17:
            _context16.t1 = contractAddress;
            _context16.next = 20;
            return getAccounts();

          case 20:
            _context16.t2 = _context16.sent[0];
            _context16.t3 = bigInt(cost).multiply(bigInt(totalToMint)).toString(16);
            _context16.t4 = contract.methods.mintShibas(totalToMint).encodeABI();
            transactionParameters = {
              to: _context16.t1,
              from: _context16.t2,
              value: _context16.t3,
              data: _context16.t4
            };
            _context16.prev = 24;
            _context16.next = 27;
            return (_provider = provider) === null || _provider === void 0 ? void 0 : _provider.request({
              method: 'eth_sendTransaction',
              params: [transactionParameters]
            });

          case 27:
            _context16.next = 32;
            break;

          case 29:
            _context16.prev = 29;
            _context16.t5 = _context16["catch"](24);
            console.log(_context16.t5);

          case 32:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[24, 29]]);
  }));
  return _mint.apply(this, arguments);
}

var abi = [{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "approved",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "Approval",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "bool",
    "name": "approved",
    "type": "bool"
  }],
  "name": "ApprovalForAll",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "Transfer",
  "type": "event"
}, {
  "inputs": [],
  "name": "MAX_SHIBAS",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "MAX_SHIBAS_PRESALE",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "numShibas",
    "type": "uint256"
  }, {
    "internalType": "address",
    "name": "recipient",
    "type": "address"
  }],
  "name": "airdropShibas",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address[]",
    "name": "recipients",
    "type": "address[]"
  }],
  "name": "airdropShibasToMany",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "baseURI",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "newShibasPrice",
    "type": "uint256"
  }],
  "name": "changeShibasPrice",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "flipPresaleState",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "flipSaleState",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "getApproved",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }],
  "name": "isApprovedForAll",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "maxShibasPurchase",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "minShibasPresalePurchase",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "numberOfShibas",
    "type": "uint256"
  }],
  "name": "mintShibas",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function"
}, {
  "inputs": [],
  "name": "name",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "ownerOf",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "presaleIsActive",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "numberOfShibas",
    "type": "uint256"
  }],
  "name": "presaleShibas",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function"
}, {
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "reserveAmount",
    "type": "uint256"
  }],
  "name": "reserveShibas",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }, {
    "internalType": "bytes",
    "name": "_data",
    "type": "bytes"
  }],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "saleIsActive",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }, {
    "internalType": "bool",
    "name": "approved",
    "type": "bool"
  }],
  "name": "setApprovalForAll",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "string",
    "name": "baseURI",
    "type": "string"
  }],
  "name": "setBaseURI",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "shibasPrice",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "bytes4",
    "name": "interfaceId",
    "type": "bytes4"
  }],
  "name": "supportsInterface",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "symbol",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "index",
    "type": "uint256"
  }],
  "name": "tokenByIndex",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "index",
    "type": "uint256"
  }],
  "name": "tokenOfOwnerByIndex",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "tokenURI",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "transferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "withdraw",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}];