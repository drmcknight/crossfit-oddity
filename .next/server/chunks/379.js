"use strict";
exports.id = 379;
exports.ids = [379];
exports.modules = {

/***/ 379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t7": () => (/* reexport */ CTASection),
  "lL": () => (/* reexport */ GettingStartedSection),
  "h4": () => (/* reexport */ Header),
  "DH": () => (/* reexport */ HeroSection),
  "BL": () => (/* reexport */ LocationSection),
  "qY": () => (/* reexport */ MembershipsSection),
  "oO": () => (/* reexport */ OurProgramsSection),
  "im": () => (/* reexport */ Wrapper)
});

// UNUSED EXPORTS: Logo, Menu

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/menu.tsx



const Nav = external_styled_components_default().nav.withConfig({
  displayName: "menu__Nav",
  componentId: "sc-1s6si1u-0"
})(["height:60px;@media (max-width:768px){display:none;}"]);
const Link = external_styled_components_default().a.withConfig({
  displayName: "menu__Link",
  componentId: "sc-1s6si1u-1"
})(["line-height:60px;padding-right:20px;"]);
const Menu = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Nav, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Link, {
      href: "/our-gym",
      children: "Our Gym"
    }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
      href: "/memberships",
      children: "Memberships"
    }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
      href: "/schedule",
      children: "Schedule"
    })]
  });
};
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/logo.tsx




const LogoWrapper = external_styled_components_default().div.withConfig({
  displayName: "logo__LogoWrapper",
  componentId: "sc-3s88e1-0"
})(["display:flex;flex-direction:row;"]);
const LogoLink = external_styled_components_default().a.withConfig({
  displayName: "logo__LogoLink",
  componentId: "sc-3s88e1-1"
})(["display:inline-block;line-height:60px;font-size:large;font-weight:bold;text-transform:uppercase;&:hover{color:black;}&:visited{color:black;}"]);
const Logo = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(LogoWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: "/images/oddity.png",
      height: "60px",
      width: "60px",
      alt: "logo"
    }), /*#__PURE__*/jsx_runtime_.jsx(LogoLink, {
      href: "/",
      children: "CrossFitOddity"
    })]
  });
};
;// CONCATENATED MODULE: ./components/header.tsx






const HeaderWrapper = external_styled_components_default().header.withConfig({
  displayName: "header__HeaderWrapper",
  componentId: "sc-10hgyc0-0"
})(["width:100%;height:60px;display:flex;flex-direction:row;background-color:white;justify-content:space-between;"]);
const PhoneNumber = external_styled_components_default().a.withConfig({
  displayName: "header__PhoneNumber",
  componentId: "sc-10hgyc0-1"
})(["display:inline-block;line-height:60px;font-size:large;font-weight:bold;text-transform:uppercase;color:black;&:visited{color:black;}"]);
const Header = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Logo, {}), /*#__PURE__*/jsx_runtime_.jsx(PhoneNumber, {
      href: "tel:(256)924-5726",
      children: "(256) 924-5726"
    }), /*#__PURE__*/jsx_runtime_.jsx(Menu, {})]
  });
};
;// CONCATENATED MODULE: ./components/wrapper.tsx

const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "wrapper__Wrapper",
  componentId: "sc-1ka3kw3-0"
})(["max-width:1440px;min-height:100%;margin:auto;@media (max-width:768px){width:100%;}"]);
;// CONCATENATED MODULE: ./components/ourProgramsSection.tsx



const FullWidthSection = external_styled_components_default().section.withConfig({
  displayName: "ourProgramsSection__FullWidthSection",
  componentId: "sc-m2phke-0"
})(["max-height:550px;margin:5px;flex-basis:100%;background-color:#f4f4f4;margin:0;"]);
const ItemHeader = external_styled_components_default().h2.withConfig({
  displayName: "ourProgramsSection__ItemHeader",
  componentId: "sc-m2phke-1"
})(["font-weight:800;text-transform:uppercase;font-family:Oswald;text-align:center;"]);
const ItemList = external_styled_components_default().div.withConfig({
  displayName: "ourProgramsSection__ItemList",
  componentId: "sc-m2phke-2"
})(["display:flex;flex-flow:row wrap;"]);
const Item = external_styled_components_default().summary.withConfig({
  displayName: "ourProgramsSection__Item",
  componentId: "sc-m2phke-3"
})(["flex-basis:33%;@media (max-width:768px){flex-basis:100%;}padding:0px 25px;"]);
const ItemDescription = external_styled_components_default().p.withConfig({
  displayName: "ourProgramsSection__ItemDescription",
  componentId: "sc-m2phke-4"
})([""]);
const OurProgramsSection = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(FullWidthSection, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ItemList, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Item, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ItemHeader, {
          children: "CrossFit Group Training"
        }), /*#__PURE__*/jsx_runtime_.jsx(ItemDescription, {
          children: "Execute a diverse set of workouts within a group setting. Each session is led by a coach that will warm you up, teach you how to perform the moves, and help you scale the exercise to your fitness level. You must complete our Foundations course before jumping into a group sessions."
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Item, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ItemHeader, {
          children: "Barbell Club"
        }), /*#__PURE__*/jsx_runtime_.jsx(ItemDescription, {
          children: "Work on olympic weightlifting in 8 week blocks with a trained coach."
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Item, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ItemHeader, {
          children: "Yoga Classes"
        }), /*#__PURE__*/jsx_runtime_.jsx(ItemDescription, {
          children: "Improve mental and physical fitness with our twice-per-week yoga classes. These classes are included in your membership and will be led by a coach."
        })]
      })]
    })
  });
};
;// CONCATENATED MODULE: ./components/membershipsSection.tsx



const membershipsSection_Item = external_styled_components_default().section.withConfig({
  displayName: "membershipsSection__Item",
  componentId: "sc-1jh307n-0"
})(["background-color:red;flex-basis:50%;padding:5px;background-color:#292d3f;color:white;margin:0;@media (max-width:768px){flex-basis:100%;}"]);
const membershipsSection_ItemHeader = external_styled_components_default().h2.withConfig({
  displayName: "membershipsSection__ItemHeader",
  componentId: "sc-1jh307n-1"
})(["font-family:Oswald;text-align:center;"]);
const MembershipList = external_styled_components_default().div.withConfig({
  displayName: "membershipsSection__MembershipList",
  componentId: "sc-1jh307n-2"
})(["display:flex;padding:10px;margin-top:30px;flex-flow:row wrap;justify-content:space-evenly"]);
const MembershipWrapper = external_styled_components_default().div.withConfig({
  displayName: "membershipsSection__MembershipWrapper",
  componentId: "sc-1jh307n-3"
})([""]);
const MembershipHeader = external_styled_components_default().div.withConfig({
  displayName: "membershipsSection__MembershipHeader",
  componentId: "sc-1jh307n-4"
})(["font-style:italic;margin-left:40px;"]);
const PriceDollar = external_styled_components_default().span.withConfig({
  displayName: "membershipsSection__PriceDollar",
  componentId: "sc-1jh307n-5"
})(["font-size:70px;color:#7cda24;"]);
const PricePerMonth = external_styled_components_default().span.withConfig({
  displayName: "membershipsSection__PricePerMonth",
  componentId: "sc-1jh307n-6"
})(["font-size:small;color:white;"]);
const LinkList = external_styled_components_default().div.withConfig({
  displayName: "membershipsSection__LinkList",
  componentId: "sc-1jh307n-7"
})(["display:flex;flex-flow:row wrap;justify-content:center;margin-top:35px;@media (max-width:768px){margin:20px 0 20px 0;}"]);
const MembershipOptionsLink = external_styled_components_default().a.withConfig({
  displayName: "membershipsSection__MembershipOptionsLink",
  componentId: "sc-1jh307n-8"
})(["display:inline-block;padding:10px;background-color:#7cda24;color:white;cursor:pointer;margin:auto;&:hover{color:white;}&:visited{color:white;}"]);
const MembershipsSection = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(membershipsSection_Item, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(MembershipList, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(MembershipWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(PriceDollar, {
          children: "$150"
        }), /*#__PURE__*/jsx_runtime_.jsx(PricePerMonth, {
          children: "/month"
        }), /*#__PURE__*/jsx_runtime_.jsx(MembershipHeader, {
          children: "Unlimited Access"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MembershipWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(PriceDollar, {
          children: "$135"
        }), /*#__PURE__*/jsx_runtime_.jsx(PricePerMonth, {
          children: "/month"
        }), /*#__PURE__*/jsx_runtime_.jsx(MembershipHeader, {
          children: "3 days/week"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(LinkList, {
      children: /*#__PURE__*/jsx_runtime_.jsx(MembershipOptionsLink, {
        href: "/memberships",
        children: "View more membership options"
      })
    })]
  });
};
;// CONCATENATED MODULE: ./components/gettingStartedSection.tsx



const gettingStartedSection_Item = external_styled_components_default().section.withConfig({
  displayName: "gettingStartedSection__Item",
  componentId: "sc-1sgn85p-0"
})(["height:270px;margin:0;flex-basis:50%;padding:5px;background-color:#f4f4f4;@media (max-width:768px){flex-basis:100%;}"]);
const gettingStartedSection_ItemHeader = external_styled_components_default().h2.withConfig({
  displayName: "gettingStartedSection__ItemHeader",
  componentId: "sc-1sgn85p-1"
})(["font-family:Oswald;text-align:center;"]);
const gettingStartedSection_ItemDescription = external_styled_components_default().p.withConfig({
  displayName: "gettingStartedSection__ItemDescription",
  componentId: "sc-1sgn85p-2"
})(["padding:0 40px 40px 40px;"]);
const gettingStartedSection_LinkList = external_styled_components_default().div.withConfig({
  displayName: "gettingStartedSection__LinkList",
  componentId: "sc-1sgn85p-3"
})(["display:flex;flex-flow:row wrap;justify-content:center;"]);
const gettingStartedSection_Link = external_styled_components_default().a.withConfig({
  displayName: "gettingStartedSection__Link",
  componentId: "sc-1sgn85p-4"
})(["display:inline-block;padding:10px;background-color:#7cda24;color:white;cursor:pointer;margin-right:15px;&:hover{color:white;}&:visited{color:white;}"]);
const GettingStartedSection = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(gettingStartedSection_Item, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(gettingStartedSection_ItemHeader, {
      children: "Just Getting Started?"
    }), /*#__PURE__*/jsx_runtime_.jsx(gettingStartedSection_ItemDescription, {
      children: "We understand that starting something new can be intimidating. Use the resources below to hopefully take the stress out of getting started."
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(gettingStartedSection_LinkList, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(gettingStartedSection_Link, {
        href: "/our-gym",
        children: "Tour the gym"
      }), /*#__PURE__*/jsx_runtime_.jsx(gettingStartedSection_Link, {
        href: "/on-ramp",
        children: "Read about the On Ramp"
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./components/ctaSection.tsx



const ctaSection_Item = external_styled_components_default().section.withConfig({
  displayName: "ctaSection__Item",
  componentId: "sc-14gthnq-0"
})(["margin:5px;flex-basis:50%;padding:5px;background-color:#7cda24;color:white;margin:0;@media (max-width:768px){flex-basis:100%;}"]);
const ctaSection_ItemHeader = external_styled_components_default().h2.withConfig({
  displayName: "ctaSection__ItemHeader",
  componentId: "sc-14gthnq-1"
})(["font-family:Oswald;text-align:center;"]);
const ctaSection_ItemDescription = external_styled_components_default().div.withConfig({
  displayName: "ctaSection__ItemDescription",
  componentId: "sc-14gthnq-2"
})(["padding:5px;margin:auto;"]);
const Form = external_styled_components_default().form.withConfig({
  displayName: "ctaSection__Form",
  componentId: "sc-14gthnq-3"
})(["display:flex;flex-flow:row wrap;justify-content:end;margin-top:15px;"]);
const Input = external_styled_components_default().input.withConfig({
  displayName: "ctaSection__Input",
  componentId: "sc-14gthnq-4"
})(["   width:300px;height:40px;margin:0 15px 0 0;@media (max-width:768px){width:350px;margin:5px;}"]);
const SubmitButton = external_styled_components_default().button.withConfig({
  displayName: "ctaSection__SubmitButton",
  componentId: "sc-14gthnq-5"
})(["background-color:#7cda24;width:100px;height:40px;margin:20px;border:1px solid white;color:white;gap:10px;&:hover{cursor:pointer;}"]);
const CTASection = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ctaSection_Item, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ctaSection_ItemHeader, {
      children: "Leave us your name and number and we'll text you"
    }), /*#__PURE__*/jsx_runtime_.jsx(ctaSection_ItemDescription, {
      children: "We will talk about what your fitness goals are in addition to helping you pick the right program tailored specifically for you. "
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form, {
      action: "https://formspree.io/f/xbjbjkgd",
      method: "POST",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Input, {
        name: "name",
        placeholder: "Your name"
      }), /*#__PURE__*/jsx_runtime_.jsx(Input, {
        name: "phone",
        placeholder: "Phone"
      }), /*#__PURE__*/jsx_runtime_.jsx(SubmitButton, {
        type: "submit",
        children: "Submit"
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./components/locationSection.tsx



const locationSection_Item = external_styled_components_default().section.withConfig({
  displayName: "locationSection__Item",
  componentId: "sc-1i5cnyo-0"
})(["height:270px;background-color:red;margin:0;flex-basis:50%;background-image:url('/images/oddity-location.png');@media (max-width:768px){flex-basis:100%;}"]);
const locationSection_ItemHeader = external_styled_components_default().h2.withConfig({
  displayName: "locationSection__ItemHeader",
  componentId: "sc-1i5cnyo-1"
})(["font-family:Oswald;text-align:center;"]);
const locationSection_ItemDescription = external_styled_components_default().p.withConfig({
  displayName: "locationSection__ItemDescription",
  componentId: "sc-1i5cnyo-2"
})(["padding:15px;"]);
const HeroImageSection = external_styled_components_default().section.withConfig({
  displayName: "locationSection__HeroImageSection",
  componentId: "sc-1i5cnyo-3"
})(["flex-basis:100%;margin:0;"]);
const Mask = external_styled_components_default().div.withConfig({
  displayName: "locationSection__Mask",
  componentId: "sc-1i5cnyo-4"
})(["background-color:rgba(0,0,0,0.4);width:100%;height:100%;color:white;display:flex;flex-direction:row;justify-content:center;"]);
const Address = external_styled_components_default().span.withConfig({
  displayName: "locationSection__Address",
  componentId: "sc-1i5cnyo-5"
})(["margin:auto;"]);
const LocationSection = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(locationSection_Item, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Mask, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Address, {
        children: ["102 Research Blvd ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Madison, AL 35758"]
      })
    })
  });
};
;// CONCATENATED MODULE: ./components/heroSection.tsx


const heroSection_HeroImageSection = external_styled_components_default().section.withConfig({
  displayName: "heroSection__HeroImageSection",
  componentId: "sc-cakv8x-0"
})(["height:426px;margin:5px;flex-basis:100%;background-image:url('/images/back-of-gym-hero.jpg');background-position:10px;margin:0;color:white;"]);
const HeroMask = external_styled_components_default().div.withConfig({
  displayName: "heroSection__HeroMask",
  componentId: "sc-cakv8x-1"
})(["background-color:rgba(0,0,0,0.6);width:100%;height:100%;font-size:50px;margin:auto;display:flex;flex-flow:row;justify-content:center;"]);
const HeroHeading = external_styled_components_default().span.withConfig({
  displayName: "heroSection__HeroHeading",
  componentId: "sc-cakv8x-2"
})(["margin:auto;word-spacing:20px;"]);
const HeroSection = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(heroSection_HeroImageSection, {
    children: /*#__PURE__*/jsx_runtime_.jsx(HeroMask, {
      children: /*#__PURE__*/jsx_runtime_.jsx(HeroHeading, {
        children: "Bigger. Faster. Stronger."
      })
    })
  });
};
;// CONCATENATED MODULE: ./components/index.ts











/***/ })

};
;