const Icons = ({ icon }) => {
  if (!icon) return
  const iconNumber = icon.slice(0, -1)
  const iconLetter = icon.slice(-1)
  const iconColors = {
    white: '#FFF',
    black: '#1D1D1D',
    color: {
      d: '#ffe900',
      n: '#1D1D1D', //"rgba(255, 255, 255, 0.2)
    },
  }

  switch (iconNumber) {
    case '01':
      return (
        <svg
          width='50'
          height='50'
          viewBox='0 0 50 50'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='icon'
        >
          <path
            d='M37.2017 25C37.2017 31.7389 31.7389 37.2017 25 37.2017C18.2612 37.2017 12.7983 31.7389 12.7983 25C12.7983 18.2608 18.2612 12.7983 25 12.7983C31.7389 12.7983 37.2017 18.2608 37.2017 25Z'
            fill={iconColors.color[iconLetter]}
          />
        </svg>
      )
    case '02':
      return (
        <svg
          width='50'
          height='50'
          viewBox='0 0 50 50'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='icon'
        >
          <path
            d='M41.1014 23.0641C41.1014 27.8567 37.2163 31.7422 32.4234 31.7422C27.6305 31.7422 23.7454 27.857 23.7454 23.0638C23.7454 18.2712 27.6305 14.3857 32.4234 14.3857C37.2163 14.3857 41.1018 18.2709 41.1018 23.0638'
            fill={iconColors.color[iconLetter]}
          />
          <path
            d='M14.4662 24.4785C14.723 24.4785 14.9747 24.5021 15.223 24.5359C15.1313 24.1104 15.0848 23.6763 15.0845 23.241C15.0845 19.8248 17.8548 17.0552 21.2713 17.0552C24.595 17.0552 27.299 19.6785 27.4433 22.9673C28.1238 22.3473 29.0112 22.0036 29.9318 22.0035C31.9815 22.0035 33.6436 23.6663 33.6436 25.716C33.6436 26.1832 33.5534 26.6282 33.3967 27.0396C33.6815 26.9823 33.9713 26.9534 34.2619 26.9535C36.6541 26.9535 38.5929 28.892 38.5929 31.2836C38.5929 33.6748 36.6541 35.6146 34.2619 35.6146H14.4662C11.3909 35.6146 8.89868 33.1214 8.89868 30.0457C8.89868 26.9714 11.3909 24.4785 14.4662 24.4785Z'
            fill={iconColors.white}
          />
        </svg>
      )
    case '03':
      return (
        <svg
          width='50'
          height='50'
          viewBox='0 0 50 50'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='icon'
        >
          <path
            d='M15.7205 23.1439C15.9779 23.1439 16.2296 23.1675 16.4772 23.2013C16.3858 22.7756 16.3395 22.3414 16.3391 21.906C16.3391 18.4898 19.1087 15.7202 22.5259 15.7202C25.8495 15.7202 28.5539 18.3435 28.6979 21.6324C29.3784 21.0123 30.266 20.6687 31.1867 20.6689C33.2364 20.6689 34.8982 22.3317 34.8982 24.3814C34.8982 24.8483 34.808 25.2935 34.6502 25.705C34.9355 25.6478 35.2258 25.6188 35.5168 25.6185C37.9087 25.6185 39.8472 27.5577 39.8472 29.9486C39.8472 32.3405 37.9087 34.2797 35.5168 34.2797H15.7205C12.6452 34.2797 10.1526 31.7864 10.1526 28.7114C10.1526 25.6368 12.6452 23.1439 15.7205 23.1439Z'
            fill={iconColors.white}
          />
        </svg>
      )
    case '04':
      return (
        <svg
          width='50'
          height='50'
          viewBox='0 0 50 50'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='icon'
        >
          <path
            d='M21.9696 20.4439C22.1865 20.4439 22.3987 20.4632 22.6078 20.4922C22.5309 20.1336 22.4919 19.7678 22.4916 19.401C22.4916 16.5213 24.826 14.1858 27.7061 14.1858C30.5081 14.1858 32.7879 16.3976 32.9095 19.1696C33.4831 18.6472 34.2309 18.3576 35.0068 18.3574C35.4177 18.3574 35.8247 18.4384 36.2043 18.5956C36.584 18.7529 36.929 18.9834 37.2196 19.274C37.5102 19.5646 37.7407 19.9096 37.898 20.2892C38.0552 20.6689 38.1362 21.0758 38.1362 21.4868C38.1359 21.8687 38.065 22.2473 37.927 22.6034C38.1635 22.5561 38.4078 22.5297 38.6571 22.5297C40.674 22.5297 42.3078 24.1645 42.3078 26.18C42.3078 28.1969 40.674 29.8307 38.6571 29.8307H21.9699C19.3774 29.8307 17.2764 27.7297 17.2764 25.1371C17.2764 22.5456 19.377 20.4439 21.9696 20.4439Z'
            fill={iconColors.black}
          />
          <path
            d='M13.2602 24.679C13.517 24.679 13.7686 24.7027 14.017 24.7365C13.9253 24.3108 13.8789 23.8766 13.8784 23.4412C13.8784 20.0243 16.6487 17.2554 20.0649 17.2554C23.3892 17.2554 26.093 19.879 26.2372 23.1675C26.9177 22.5474 27.8051 22.2037 28.7257 22.2037C30.7757 22.2037 32.4376 23.8665 32.4376 25.9165C32.4376 26.3834 32.3474 26.8287 32.1903 27.2402C32.4754 27.1824 32.7656 27.1535 33.0565 27.1537C35.4477 27.1537 37.3869 29.0925 37.3869 31.4841C37.3869 33.8753 35.4477 35.8142 33.0565 35.8142H13.2602C10.1849 35.8142 7.69263 33.3216 7.69263 30.2466C7.69263 27.1712 10.1849 24.679 13.2602 24.679Z'
            fill={iconColors.white}
          />
        </svg>
      )
    case '09':
      return (
        <svg
          width='50'
          height='50'
          viewBox='0 0 50 50'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='icon'
        >
          <path
            d='M26.9999 32.2737L27.1425 31.8916C27.1789 31.8009 27.1968 31.7037 27.1952 31.6059C27.1935 31.5081 27.1724 31.4117 27.1329 31.3222C27.0934 31.2327 27.0365 31.152 26.9654 31.0848C26.8942 31.0177 26.8104 30.9654 26.7188 30.9311C26.6272 30.8968 26.5297 30.8812 26.432 30.8851C26.3343 30.889 26.2383 30.9125 26.1498 30.954C26.0612 30.9956 25.9819 31.0544 25.9164 31.1271C25.8509 31.1997 25.8006 31.2847 25.7685 31.3771L25.6259 31.7599C25.5578 31.9421 25.5648 32.1439 25.6455 32.3209C25.7261 32.4979 25.8738 32.6356 26.056 32.7038C26.2382 32.7719 26.44 32.7649 26.617 32.6842C26.794 32.6036 26.9318 32.4559 26.9999 32.2737ZM22.6925 17.4501C22.8671 17.4501 23.0381 17.4656 23.205 17.4889C23.1433 17.2005 23.1119 16.9065 23.1114 16.6116C23.1114 14.2974 24.9881 12.4224 27.3019 12.4224C29.5533 12.4224 31.3844 14.1994 31.4817 16.4264C31.9428 16.0066 32.5442 15.774 33.1678 15.7744C33.8344 15.7744 34.4738 16.0392 34.9451 16.5106C35.4165 16.982 35.6813 17.6213 35.6813 18.2879C35.6813 18.6048 35.6202 18.9068 35.5138 19.1849C35.7071 19.146 35.9038 19.1264 36.1009 19.1264C36.8787 19.1264 37.6245 19.4354 38.1745 19.9853C38.7244 20.5352 39.0334 21.2811 39.0334 22.0588C39.0334 22.8366 38.7244 23.5825 38.1745 24.1324C37.6245 24.6823 36.8787 24.9913 36.1009 24.9913H22.6925C20.6097 24.9913 18.9219 23.3038 18.9219 21.221C18.9219 19.1389 20.6097 17.4501 22.6925 17.4501Z'
            fill={iconColors.black}
          />
          <path
            d='M15.4398 20.8528C15.6466 20.8528 15.8476 20.8714 16.0479 20.8988C15.9741 20.557 15.9367 20.2085 15.9364 19.8589C15.9364 17.1136 18.1618 14.8879 20.907 14.8879C23.5783 14.8879 25.7503 16.996 25.8665 19.6383C26.4132 19.1401 27.1262 18.8641 27.8658 18.8643C28.6567 18.8645 29.4152 19.1788 29.9744 19.738C30.5336 20.2973 30.8478 21.0558 30.8479 21.8467C30.8479 22.2221 30.7753 22.5798 30.6489 22.9106C30.878 22.8643 31.1112 22.841 31.3449 22.841C33.2662 22.841 34.8243 24.3984 34.8243 26.3204C34.8243 28.2417 33.2662 29.8001 31.3445 29.8001H15.4398C12.9695 29.8001 10.9658 27.7967 10.9658 25.3265C10.9658 22.8558 12.9692 20.8528 15.4398 20.8528Z'
            fill={iconColors.white}
          />
          <path
            d='M25.1413 37.2444L25.6413 35.9062C25.6651 35.8431 25.6762 35.776 25.6739 35.7086C25.6717 35.6412 25.6561 35.575 25.6282 35.5136C25.6003 35.4523 25.5605 35.397 25.5111 35.3511C25.4617 35.3052 25.4038 35.2695 25.3406 35.2461L24.9264 35.091C24.7991 35.0436 24.6582 35.0487 24.5347 35.105C24.4111 35.1614 24.3149 35.2645 24.2673 35.3917L23.7673 36.7309C23.7436 36.7939 23.7326 36.8609 23.7349 36.9282C23.7372 36.9955 23.7528 37.0616 23.7807 37.1229C23.8086 37.1841 23.8483 37.2393 23.8975 37.2852C23.9467 37.3311 24.0046 37.3668 24.0676 37.3903L24.4818 37.545C24.6091 37.5926 24.7501 37.5877 24.8738 37.5313C24.9975 37.4749 25.0937 37.3717 25.1413 37.2444ZM22.1024 34.1988L22.7048 32.589C22.7285 32.5259 22.7395 32.4588 22.7372 32.3915C22.7349 32.3241 22.7194 32.2579 22.6914 32.1966C22.6635 32.1353 22.6237 32.0802 22.5744 32.0343C22.5251 31.9884 22.4672 31.9526 22.4041 31.9292L21.9899 31.7744C21.9269 31.7508 21.8598 31.7398 21.7926 31.7421C21.7253 31.7444 21.6591 31.7599 21.5979 31.7878C21.5366 31.8157 21.4815 31.8554 21.4356 31.9047C21.3897 31.9539 21.354 32.0117 21.3305 32.0748L20.7278 33.6849C20.7042 33.7479 20.6932 33.815 20.6956 33.8823C20.6979 33.9496 20.7135 34.0157 20.7414 34.077C20.7693 34.1382 20.809 34.1934 20.8583 34.2392C20.9075 34.2851 20.9654 34.3208 21.0284 34.3444L21.4426 34.4994C21.57 34.547 21.711 34.5421 21.8348 34.4857C21.9585 34.4293 22.0548 34.3261 22.1024 34.1988ZM21.1936 36.6292L21.2862 36.3825C21.32 36.2923 21.3357 36.1962 21.3323 36.0999C21.329 36.0035 21.3067 35.9088 21.2668 35.8211C21.2268 35.7333 21.17 35.6543 21.0995 35.5886C21.029 35.5228 20.9463 35.4716 20.856 35.4378C20.7657 35.404 20.6696 35.3883 20.5733 35.3917C20.477 35.395 20.3822 35.4173 20.2945 35.4572C20.2068 35.4972 20.1278 35.554 20.062 35.6245C19.9962 35.695 19.945 35.7777 19.9112 35.868L19.8193 36.1153C19.7856 36.2056 19.77 36.3016 19.7734 36.3978C19.7767 36.4941 19.7991 36.5888 19.839 36.6764C19.9197 36.8534 20.0675 36.9911 20.2497 37.0592C20.432 37.1273 20.6338 37.1202 20.8108 37.0395C20.9878 36.9588 21.1255 36.8114 21.1936 36.6292ZM19.5126 30.2268L19.7565 29.5731C19.7902 29.4828 19.8058 29.3868 19.8024 29.2906C19.799 29.1943 19.7767 29.0996 19.7368 29.012C19.6968 28.9243 19.64 28.8454 19.5695 28.7797C19.499 28.714 19.4163 28.6629 19.3261 28.6292C19.2358 28.5954 19.1398 28.5798 19.0436 28.5832C18.9473 28.5866 18.8526 28.6089 18.765 28.6489C18.6773 28.6888 18.5984 28.7457 18.5327 28.8161C18.467 28.8866 18.4159 28.9693 18.3821 29.0596L18.1376 29.7133C18.0696 29.8955 18.0766 30.0972 18.1572 30.2741C18.2378 30.4511 18.3853 30.5889 18.5673 30.6572C18.7497 30.7253 18.9517 30.7182 19.1289 30.6375C19.3062 30.5568 19.4441 30.4091 19.5126 30.2268ZM17.822 34.7464L18.424 33.1369C18.4715 33.0095 18.4666 32.8685 18.4102 32.7447C18.3538 32.6209 18.2507 32.5246 18.1234 32.4768L17.7092 32.3217C17.6462 32.2981 17.5791 32.2872 17.5119 32.2895C17.4446 32.2919 17.3785 32.3075 17.3173 32.3354C17.256 32.3633 17.2009 32.403 17.1551 32.4523C17.1092 32.5015 17.0735 32.5594 17.0501 32.6224L16.4474 34.2325C16.4237 34.2956 16.4128 34.3626 16.4151 34.4299C16.4174 34.4971 16.433 34.5633 16.4609 34.6245C16.4887 34.6858 16.5284 34.7409 16.5777 34.7868C16.6269 34.8327 16.6847 34.8684 16.7477 34.892L17.1619 35.0467C17.225 35.0704 17.2921 35.0815 17.3594 35.0792C17.4268 35.0769 17.493 35.0613 17.5544 35.0334C17.6157 35.0055 17.6709 34.9657 17.7168 34.9164C17.7627 34.8671 17.7985 34.8095 17.822 34.7464Z'
            fill={iconColors.black}
          />
        </svg>
      )
    case '10':
      return (
        <svg
          width='50'
          height='50'
          viewBox='0 0 50 50'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='icon'
        >
          <g clipPath='url(#clip0_103_133)'>
            <path
              d='M37.9767 19.5507C37.9767 23.4132 34.8449 26.5446 30.9834 26.5446C27.1202 26.5446 23.9895 23.4129 23.9895 19.5507C23.9895 15.6882 27.1202 12.5571 30.9834 12.5571C34.8449 12.5571 37.9767 15.6882 37.9767 19.5507Z'
              fill={iconColors.color[iconLetter]}
            />
            <path
              d='M16.5115 20.6905C16.7182 20.6905 16.9202 20.7091 17.1213 20.7368C17.0471 20.3941 17.0095 20.0445 17.0091 19.6939C17.0091 16.9399 19.2412 14.7078 21.9952 14.7078C24.6743 14.7078 26.8534 16.8226 26.9699 19.4726C27.5183 18.973 28.2335 18.6961 28.9753 18.6963C29.3682 18.6963 29.7572 18.7737 30.1202 18.924C30.4831 19.0744 30.8129 19.2948 31.0907 19.5726C31.3684 19.8505 31.5887 20.1803 31.739 20.5433C31.8893 20.9063 31.9666 21.2953 31.9665 21.6882C31.9663 22.0529 31.8987 22.4145 31.7672 22.7547C31.9968 22.7083 32.2305 22.6848 32.4648 22.6848C34.3929 22.6848 35.955 24.2473 35.955 26.1747C35.955 28.1024 34.3929 29.6649 32.4652 29.6649H16.5111C14.0331 29.6649 12.0229 27.6554 12.0229 25.1777C12.0229 22.7 14.0334 20.6905 16.5115 20.6905Z'
              fill={iconColors.white}
            />
            <path
              d='M28.0581 32.1389L28.201 31.7571C28.2348 31.6669 28.2505 31.5709 28.2472 31.4745C28.2438 31.3782 28.2216 31.2835 28.1816 31.1958C28.1417 31.1081 28.0849 31.0291 28.0144 30.9633C27.9439 30.8976 27.8612 30.8463 27.771 30.8125C27.6807 30.7788 27.5847 30.7631 27.4883 30.7664C27.392 30.7697 27.2973 30.792 27.2096 30.8319C27.1219 30.8719 27.0429 30.9287 26.9771 30.9992C26.9114 31.0696 26.8601 31.1524 26.8264 31.2426L26.6838 31.625C26.6477 31.7158 26.6301 31.8128 26.6319 31.9104C26.6338 32.0081 26.6551 32.1044 26.6947 32.1936C26.7343 32.2829 26.7913 32.3634 26.8623 32.4304C26.9334 32.4974 27.0171 32.5495 27.1086 32.5837C27.2001 32.6179 27.2974 32.6335 27.395 32.6296C27.4926 32.6256 27.5884 32.6023 27.6768 32.5609C27.7653 32.5194 27.8445 32.4608 27.91 32.3883C27.9755 32.3159 28.0258 32.2311 28.0581 32.1389ZM26.1987 37.1098L26.6997 35.7713C26.7233 35.7083 26.7342 35.6412 26.7319 35.5739C26.7296 35.5066 26.714 35.4404 26.6861 35.3791C26.6581 35.3179 26.6184 35.2627 26.5692 35.2168C26.5199 35.1708 26.4621 35.1351 26.399 35.1115L25.9848 34.9561C25.8575 34.9087 25.7166 34.9137 25.593 34.97C25.4694 35.0264 25.3733 35.1296 25.3257 35.2568L24.8247 36.5963C24.8011 36.6593 24.7901 36.7264 24.7924 36.7936C24.7948 36.8608 24.8103 36.9269 24.8382 36.9882C24.8661 37.0494 24.9058 37.1045 24.955 37.1504C25.0042 37.1962 25.062 37.2319 25.125 37.2555L25.5392 37.4105C25.6022 37.4342 25.6693 37.4452 25.7366 37.4429C25.8039 37.4406 25.8701 37.4251 25.9314 37.3971C25.9926 37.3692 26.0478 37.3294 26.0937 37.2801C26.1395 37.2308 26.1752 37.173 26.1987 37.1098ZM23.1605 34.0642L23.7622 32.4541C23.7858 32.391 23.7968 32.3239 23.7945 32.2566C23.7922 32.1893 23.7766 32.1231 23.7487 32.0618C23.7208 32.0006 23.681 31.9454 23.6317 31.8995C23.5825 31.8536 23.5246 31.8178 23.4615 31.7943L23.0473 31.6396C22.9843 31.6159 22.9172 31.6049 22.8499 31.6073C22.7826 31.6096 22.7165 31.6252 22.6552 31.6531C22.5939 31.681 22.5388 31.7208 22.4929 31.77C22.447 31.8193 22.4113 31.8772 22.3878 31.9403L21.7862 33.55C21.7625 33.6131 21.7516 33.6801 21.7539 33.7474C21.7562 33.8146 21.7718 33.8808 21.7997 33.942C21.8276 34.0033 21.8672 34.0584 21.9165 34.1043C21.9657 34.1502 22.0235 34.186 22.0865 34.2095L22.501 34.3649C22.6283 34.4125 22.7694 34.4075 22.893 34.3511C23.0167 34.2948 23.1129 34.1916 23.1605 34.0642ZM22.2514 36.4943L22.3433 36.2477C22.4043 36.0671 22.3927 35.8699 22.311 35.6977C22.2292 35.5255 22.0837 35.3919 21.9052 35.325C21.7267 35.2582 21.5292 35.2634 21.3545 35.3396C21.1797 35.4157 21.0415 35.5569 20.9689 35.7332L20.8764 35.9805C20.8082 36.1628 20.8153 36.3647 20.8961 36.5418C20.9768 36.719 21.1246 36.8567 21.3069 36.9249C21.4893 36.993 21.6912 36.9859 21.8683 36.9052C22.0454 36.8244 22.1832 36.6766 22.2514 36.4943ZM20.5693 30.0923L20.8139 29.4386C20.8476 29.3483 20.8632 29.2523 20.8598 29.1561C20.8564 29.0598 20.8341 28.9651 20.7942 28.8775C20.7542 28.7898 20.6973 28.7109 20.6269 28.6452C20.5564 28.5795 20.4737 28.5284 20.3835 28.4946C20.2932 28.4609 20.1972 28.4453 20.1009 28.4487C20.0047 28.4521 19.91 28.4744 19.8224 28.5144C19.7347 28.5543 19.6558 28.6112 19.5901 28.6816C19.5244 28.7521 19.4733 28.8348 19.4395 28.925L19.1953 29.5784C19.1571 29.6696 19.1377 29.7675 19.1383 29.8663C19.1389 29.9651 19.1594 30.0628 19.1987 30.1535C19.2379 30.2442 19.295 30.326 19.3667 30.3941C19.4383 30.4622 19.5229 30.5151 19.6155 30.5497C19.708 30.5843 19.8066 30.5998 19.9054 30.5954C20.0041 30.5909 20.1009 30.5666 20.19 30.5239C20.2791 30.4811 20.3586 30.4209 20.4238 30.3466C20.4891 30.2724 20.5387 30.1858 20.5696 30.0919M18.8797 34.6115L19.4814 33.0024C19.5052 32.9393 19.5162 32.8722 19.5139 32.8048C19.5117 32.7375 19.4962 32.6712 19.4683 32.6099C19.4404 32.5485 19.4006 32.4933 19.3514 32.4473C19.3021 32.4013 19.2442 32.3655 19.1811 32.3419L18.7666 32.1872C18.6392 32.1397 18.4982 32.1447 18.3745 32.2011C18.2508 32.2574 18.1545 32.3606 18.1068 32.4879L17.5054 34.0977C17.4818 34.1607 17.4709 34.2278 17.4732 34.2951C17.4755 34.3623 17.4911 34.4285 17.5191 34.4897C17.547 34.551 17.5867 34.6061 17.636 34.652C17.6852 34.6979 17.743 34.7336 17.8061 34.7571L18.2196 34.9125C18.347 34.9601 18.4881 34.9552 18.6119 34.8988C18.7357 34.8425 18.832 34.7389 18.8797 34.6115Z'
              fill={iconColors.black}
            />
          </g>
          <defs>
            <clipPath id='clip0_103_133'>
              <rect width='50' height='50' fill='white' />
            </clipPath>
          </defs>
        </svg>
      )
    case '11':
      return (
        <svg
          width='50'
          height='50'
          viewBox='0 0 50 50'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='icon'
        >
          <path
            d='M22.2837 17.4067C22.4891 17.4067 22.6891 17.4256 22.8874 17.452C22.8145 17.1129 22.7778 16.767 22.7779 16.4202C22.7779 13.6959 24.986 11.4878 27.7097 11.4878C30.3604 11.4878 32.5168 13.579 32.632 16.2016C33.1744 15.7073 33.8819 15.4333 34.6158 15.4334C35.0045 15.4334 35.3895 15.5099 35.7487 15.6586C36.1079 15.8074 36.4343 16.0254 36.7092 16.3003C36.9842 16.5751 37.2023 16.9015 37.3511 17.2606C37.4999 17.6198 37.5765 18.0048 37.5766 18.3935C37.576 18.7547 37.5087 19.1126 37.3783 19.4493C37.6055 19.4031 37.8369 19.3799 38.0688 19.38C39.9766 19.38 41.5222 20.9263 41.5222 22.8331C41.5222 24.7402 39.9766 26.2858 38.0688 26.2858H22.2837C19.8316 26.2858 17.8445 24.2983 17.8445 21.8466C17.8445 19.3945 19.8316 17.4067 22.2837 17.4067Z'
            fill={iconColors.black}
          />
          <path
            d='M13.7447 21.4125C13.9879 21.4125 14.2261 21.4348 14.4602 21.4665C14.374 21.0641 14.3305 20.6538 14.3301 20.2422C14.3301 17.0105 16.9494 14.3909 20.1825 14.3909C23.3258 14.3909 25.8839 16.8723 26.0203 19.9834C26.664 19.3968 27.5035 19.0717 28.3744 19.0719C30.3136 19.0719 31.8852 20.6436 31.8852 22.5831C31.8852 23.025 31.8008 23.4456 31.6508 23.8355C31.916 23.7814 32.1899 23.7534 32.4704 23.7534C34.7325 23.7534 36.567 25.5868 36.567 27.8493C36.567 30.1118 34.7325 31.9459 32.4704 31.9459H13.7447C10.8359 31.9459 8.47778 29.5878 8.47778 26.679C8.47778 23.7703 10.8359 21.4125 13.7447 21.4125Z'
            fill={iconColors.white}
          />
          <path
            d='M15.9062 38.5125C15.8752 38.5124 15.8447 38.5046 15.8174 38.4898C15.7901 38.4751 15.7669 38.4538 15.7498 38.428C15.7327 38.4021 15.7222 38.3724 15.7193 38.3416C15.7164 38.3107 15.7212 38.2796 15.7332 38.251L17.8447 33.2355H15.9072C15.875 33.2354 15.8434 33.2271 15.8154 33.2114C15.7873 33.1957 15.7637 33.1731 15.7468 33.1457C15.7299 33.1184 15.7202 33.0872 15.7187 33.0551C15.7173 33.0229 15.724 32.991 15.7383 32.9622L18.565 27.3081C18.5806 27.2766 18.6047 27.2501 18.6346 27.2316C18.6646 27.2131 18.699 27.2033 18.7342 27.2034H21.7494C21.7831 27.2035 21.8161 27.2126 21.8451 27.2298C21.874 27.247 21.8979 27.2716 21.9141 27.3012C21.9303 27.3307 21.9383 27.364 21.9372 27.3977C21.9362 27.4313 21.9262 27.4641 21.9082 27.4926L19.7052 30.9736H21.9379C21.9738 30.9737 22.0089 30.984 22.0391 31.0033C22.0693 31.0227 22.0934 31.0502 22.1085 31.0827C22.1236 31.1153 22.1291 31.1514 22.1244 31.187C22.1197 31.2225 22.1049 31.256 22.0819 31.2834L16.0508 38.4459C16.033 38.4669 16.0108 38.4838 15.9859 38.4953C15.9609 38.5069 15.9337 38.5125 15.9062 38.5125Z'
            fill={iconColors.color[iconLetter]}
          />
        </svg>
      )
    case '13':
      return (
        <svg
          width='50'
          height='50'
          viewBox='0 0 50 50'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='icon'
        >
          <path
            d='M26.3545 25.7723L24.9998 26.5544L23.646 25.7723L23.6447 24.2071L24.9994 23.425L26.3541 24.2081L26.3545 25.7723ZM33.2937 25.602L29.5491 26.6054L28.1055 25.7723V24.2098L29.5315 23.3902L33.2937 24.398C33.4047 24.4276 33.5205 24.4351 33.6344 24.4201C33.7483 24.405 33.8582 24.3676 33.9576 24.3101C34.0571 24.2525 34.1443 24.176 34.2142 24.0847C34.2841 23.9935 34.3353 23.8894 34.365 23.7784C34.3946 23.6674 34.4021 23.5516 34.387 23.4377C34.3719 23.3237 34.3346 23.2139 34.277 23.1144C34.2195 23.0149 34.1429 22.9278 34.0517 22.8579C33.9605 22.788 33.8564 22.7368 33.7454 22.7071L31.6846 22.1544L33.5842 21.0632C33.684 21.0061 33.7715 20.9299 33.8418 20.839C33.912 20.748 33.9637 20.6441 33.9938 20.5332C34.0238 20.4223 34.0317 20.3065 34.017 20.1925C34.0022 20.0785 33.9652 19.9686 33.9079 19.8689C33.8508 19.7692 33.7746 19.6816 33.6837 19.6114C33.5927 19.5411 33.4888 19.4895 33.3779 19.4594C33.2669 19.4293 33.1512 19.4214 33.0372 19.4362C32.9232 19.4509 32.8132 19.488 32.7136 19.5453L30.8089 20.6392L31.3609 18.5767C31.421 18.3525 31.3896 18.1137 31.2737 17.9126C31.1578 17.7115 30.9668 17.5647 30.7427 17.5044C30.2775 17.3828 29.7954 17.6568 29.6714 18.123L28.6677 21.8683L27.2312 22.6933L25.8697 21.9058V20.2544L28.6221 17.502C28.7034 17.4209 28.768 17.3244 28.8121 17.2182C28.8561 17.1121 28.8788 16.9982 28.8788 16.8833C28.8788 16.7683 28.8561 16.6545 28.8121 16.5483C28.768 16.4422 28.7034 16.3457 28.6221 16.2645C28.5409 16.1832 28.4445 16.1186 28.3384 16.0746C28.2323 16.0305 28.1185 16.0079 28.0036 16.0079C27.8887 16.0079 27.775 16.0305 27.6689 16.0746C27.5627 16.1186 27.4664 16.1832 27.3852 16.2645L25.87 17.7794V15.5801C25.87 15.348 25.7778 15.1255 25.6137 14.9614C25.4497 14.7973 25.2271 14.7051 24.995 14.7051C24.88 14.7049 24.7661 14.7275 24.6599 14.7714C24.5536 14.8153 24.457 14.8797 24.3757 14.961C24.2943 15.0423 24.2298 15.1388 24.1857 15.245C24.1417 15.3512 24.119 15.4651 24.119 15.5801V17.7686L22.6156 16.2645C22.5345 16.1832 22.438 16.1186 22.3318 16.0745C22.2257 16.0305 22.1118 16.0078 21.9969 16.0078C21.8819 16.0078 21.7681 16.0305 21.6619 16.0745C21.5558 16.1186 21.4593 16.1832 21.3781 16.2645C21.2968 16.3457 21.2322 16.4422 21.1881 16.5483C21.1441 16.6545 21.1214 16.7683 21.1214 16.8833C21.1214 16.9982 21.1441 17.1121 21.1881 17.2182C21.2322 17.3244 21.2968 17.4209 21.3781 17.502L24.119 20.2436V21.9128L22.7687 22.6919L21.3319 21.8683L20.3295 18.123C20.2689 17.8993 20.1223 17.7087 19.9216 17.5928C19.7209 17.4769 19.4826 17.4451 19.2585 17.5044C19.0342 17.5645 18.843 17.7112 18.7269 17.9123C18.6107 18.1134 18.5792 18.3524 18.6393 18.5767L19.192 20.6385L17.2866 19.5453C17.1869 19.488 17.077 19.4509 16.963 19.4362C16.849 19.4214 16.7333 19.4293 16.6223 19.4594C16.5114 19.4895 16.4075 19.5411 16.3165 19.6114C16.2256 19.6816 16.1494 19.7692 16.0923 19.8689C16.0351 19.9686 15.9981 20.0785 15.9833 20.1924C15.9686 20.3064 15.9765 20.4221 16.0066 20.533C16.0367 20.6439 16.0883 20.7478 16.1585 20.8387C16.2288 20.9296 16.3163 21.0058 16.416 21.0628L18.3163 22.1541L16.2535 22.7071C16.1424 22.7369 16.0384 22.7883 15.9472 22.8583C15.856 22.9283 15.7795 23.0156 15.7221 23.1151C15.6061 23.3162 15.5747 23.5552 15.6349 23.7794C15.6951 24.0036 15.8418 24.1948 16.0429 24.3108C16.244 24.4268 16.483 24.4582 16.7072 24.398L20.4694 23.3895L21.895 24.2081L21.8957 25.7723L20.4518 26.6068L16.7072 25.602C16.483 25.5433 16.2446 25.5754 16.0439 25.6913C15.8432 25.8073 15.6964 25.9977 15.6352 26.2213C15.6054 26.3322 15.5977 26.4479 15.6127 26.5618C15.6276 26.6757 15.6649 26.7855 15.7223 26.885C15.7797 26.9844 15.8562 27.0716 15.9473 27.1415C16.0385 27.2114 16.1425 27.2626 16.2535 27.2922L18.3092 27.8436L16.4139 28.9378C16.247 29.034 16.1164 29.1825 16.0426 29.3605C15.9687 29.5384 15.9557 29.7357 16.0055 29.9218C16.0554 30.1079 16.1653 30.2724 16.3182 30.3896C16.4711 30.5068 16.6585 30.5702 16.8511 30.5699C17.0004 30.5699 17.1501 30.5335 17.2889 30.4527L19.1937 29.3534L18.6393 31.4233C18.6044 31.5531 18.5999 31.6892 18.6261 31.821C18.6523 31.9528 18.7085 32.0769 18.7903 32.1835C18.8722 32.2901 18.9774 32.3765 19.098 32.4359C19.2186 32.4953 19.3512 32.5261 19.4856 32.526C19.6782 32.5257 19.8653 32.4618 20.0178 32.3442C20.1704 32.2267 20.28 32.0621 20.3295 31.876L21.3373 28.1152L22.7714 27.2885L24.119 28.0662V29.7564L21.3781 32.4987C21.2556 32.6209 21.1721 32.7768 21.1383 32.9465C21.1044 33.1162 21.1217 33.2921 21.1879 33.452C21.2541 33.6119 21.3662 33.7486 21.5102 33.8447C21.6541 33.9408 21.8233 33.992 21.9964 33.9919C22.22 33.9919 22.444 33.9071 22.6156 33.7362L24.119 32.2321V34.4199C24.119 34.5349 24.1417 34.6487 24.1857 34.7549C24.2297 34.8612 24.2942 34.9576 24.3755 35.0389C24.4569 35.1202 24.5534 35.1846 24.6596 35.2285C24.7659 35.2725 24.8797 35.295 24.9947 35.2949C25.2268 35.2949 25.4493 35.2028 25.6134 35.0387C25.7775 34.8746 25.8697 34.652 25.8697 34.4199V32.2206L27.3852 33.7362C27.5562 33.9071 27.7805 33.9922 28.0035 33.9922C28.2285 33.9922 28.4521 33.9071 28.6221 33.7362C28.7034 33.655 28.7679 33.5585 28.812 33.4523C28.856 33.3462 28.8786 33.2323 28.8786 33.1174C28.8786 33.0025 28.856 32.8887 28.812 32.7825C28.7679 32.6763 28.7034 32.5799 28.6221 32.4987L25.87 29.7453V28.073L27.2305 27.2885L28.6629 28.1152L29.6714 31.876C29.7009 31.9871 29.752 32.0913 29.8218 32.1826C29.8916 32.2739 29.9788 32.3505 30.0783 32.4081C30.1778 32.4656 30.2876 32.503 30.4016 32.518C30.5155 32.533 30.6313 32.5254 30.7423 32.4956C30.8534 32.4659 30.9575 32.4145 31.0487 32.3445C31.1399 32.2745 31.2164 32.1872 31.2738 32.0877C31.3313 31.9881 31.3685 31.8781 31.3835 31.7642C31.3984 31.6502 31.3907 31.5343 31.3609 31.4233L30.8058 29.3534L32.7112 30.4527C32.8501 30.5338 33.0004 30.5699 33.1491 30.5699C33.3417 30.57 33.529 30.5065 33.6818 30.3893C33.8346 30.272 33.9445 30.1076 33.9943 29.9215C34.0441 29.7355 34.0311 29.5382 33.9574 29.3602C33.8836 29.1823 33.7531 29.0337 33.5862 28.9375L31.691 27.8436L33.7454 27.2922C33.8565 27.2628 33.9606 27.2116 34.0519 27.1418C34.1432 27.072 34.2198 26.9848 34.2774 26.8853C34.335 26.7859 34.3723 26.676 34.3873 26.562C34.4024 26.4481 34.3948 26.3323 34.365 26.2213C34.3045 25.9975 34.1579 25.8068 33.9572 25.6908C33.7565 25.5748 33.5178 25.5429 33.2937 25.602Z'
            fill={iconColors.black}
          />
        </svg>
      )
    case '50':
      return (
        <svg
          width='50'
          height='50'
          viewBox='0 0 50 50'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='icon'
        >
          <path
            d='M29.08 21.0754H13.7794C13.696 21.0753 13.6134 21.0588 13.5364 21.0269C13.4594 20.9949 13.3894 20.9481 13.3305 20.8891C13.2716 20.8301 13.2248 20.76 13.193 20.6829C13.1612 20.6059 13.1448 20.5233 13.1449 20.4399C13.1449 20.0889 13.4287 19.8048 13.7794 19.8048H29.08C29.2485 19.8048 29.41 19.8717 29.5292 19.9908C29.6483 20.1099 29.7152 20.2714 29.7152 20.4399C29.7152 20.6083 29.6483 20.7699 29.5292 20.889C29.41 21.0081 29.2485 21.0754 29.08 21.0754ZM27.526 17.9102H19.875C19.7916 17.9102 19.709 17.8938 19.6319 17.8619C19.5549 17.83 19.4848 17.7832 19.4259 17.7242C19.3669 17.6652 19.3202 17.5952 19.2883 17.5181C19.2564 17.441 19.2401 17.3584 19.2402 17.275C19.2402 16.9237 19.5236 16.6399 19.875 16.6399H27.5257C27.6941 16.6399 27.8557 16.7068 27.9748 16.8259C28.0939 16.945 28.1608 17.1066 28.1608 17.275C28.1608 17.4435 28.0939 17.605 27.9748 17.7241C27.8557 17.8432 27.6944 17.9102 27.526 17.9102ZM37.7787 24.2399H19.2905C19.1221 24.2399 18.9605 24.173 18.8414 24.0539C18.7223 23.9348 18.6554 23.7732 18.6554 23.6048C18.6554 23.4363 18.7223 23.2748 18.8414 23.1556C18.9605 23.0365 19.1221 22.9696 19.2905 22.9696H37.7784C37.8635 22.9668 37.9483 22.9812 38.0278 23.0119C38.1073 23.0426 38.1798 23.0889 38.241 23.1481C38.3023 23.2074 38.3509 23.2784 38.3842 23.3568C38.4174 23.4352 38.4345 23.5196 38.4345 23.6048C38.4345 23.69 38.4174 23.7743 38.3842 23.8527C38.3509 23.9312 38.3023 24.0021 38.241 24.0614C38.1798 24.1206 38.1073 24.167 38.0278 24.1976C37.9483 24.2283 37.8638 24.2427 37.7787 24.2399ZM30.7094 33.3605H19.2898C19.1257 33.3539 18.9705 33.2841 18.8568 33.1657C18.743 33.0473 18.6794 32.8894 18.6794 32.7252C18.6794 32.561 18.743 32.4031 18.8568 32.2847C18.9705 32.1662 19.1257 32.0964 19.2898 32.0899H30.7088C30.8772 32.0899 31.0388 32.1568 31.1579 32.2759C31.277 32.395 31.3439 32.5566 31.3439 32.725C31.3439 32.8935 31.277 33.055 31.1579 33.1741C31.0388 33.2932 30.8779 33.3605 30.7094 33.3605ZM30.7094 27.2798H12.2202C12.1368 27.2798 12.0542 27.2635 11.9771 27.2316C11.9001 27.1997 11.83 27.1529 11.7711 27.0939C11.7121 27.0349 11.6653 26.9649 11.6335 26.8878C11.6016 26.8107 11.5853 26.728 11.5855 26.6446C11.5855 26.2933 11.8682 26.0088 12.2206 26.0088H30.7088C30.7922 26.0088 30.8748 26.0252 30.9519 26.0572C31.029 26.0891 31.0991 26.1359 31.1581 26.1949C31.2171 26.2539 31.2639 26.324 31.2959 26.4011C31.3278 26.4782 31.3442 26.5608 31.3442 26.6443C31.3442 26.7277 31.3278 26.8104 31.2959 26.8875C31.2639 26.9646 31.2171 27.0346 31.1581 27.0936C31.0991 27.1526 31.029 27.1994 30.9519 27.2314C30.8748 27.2633 30.7929 27.2798 30.7094 27.2798ZM34.8175 30.3203H16.3297C16.1612 30.3203 15.9996 30.2534 15.8805 30.1342C15.7613 30.0151 15.6944 29.8535 15.6944 29.685C15.6944 29.5165 15.7613 29.3549 15.8805 29.2358C15.9996 29.1166 16.1612 29.0497 16.3297 29.0497H34.8175C34.986 29.0497 35.1475 29.1166 35.2667 29.2357C35.3858 29.3548 35.4527 29.5164 35.4527 29.6848C35.4527 29.8533 35.3858 30.0148 35.2667 30.1339C35.1475 30.253 34.986 30.3203 34.8175 30.3203Z'
            fill={iconColors.black}
          />
        </svg>
      )
  }
}

export default Icons