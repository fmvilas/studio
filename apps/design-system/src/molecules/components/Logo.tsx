import React from 'react';
import type { FunctionComponent } from 'react';

interface LogoProps {
}

export const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <div className="flex-shrink-0 ml-1.5">
      <LogoImage
        className="inline-block h-16 w-32"
      />
      <span className="inline-block text-xs text-teal-300 font-medium ml-1 tracking-wider uppercase" style={{ transform: 'translateY(0.29rem)' }}>
      beta
      </span>
    </div>
  );
};

function LogoImage({
  className = ''
}) {
  return (
    <svg className={className} width="75" height="40" viewBox="0 0 128 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.1709 33.6028H8.43181C6.19649 33.5997 4.0536 32.7104 2.47299 31.1298C0.892377 29.5492 0.00304997 27.4063 0 25.1709V8.43182C0.00304997 6.1965 0.892377 4.0536 2.47299 2.47299C4.0536 0.892377 6.19649 0.00304997 8.43181 0H25.1709C27.4065 0.00244118 29.5497 0.891577 31.1304 2.47232C32.7112 4.05307 33.6003 6.19631 33.6028 8.43182V25.1709C33.6003 27.4065 32.7112 29.5497 31.1304 31.1305C29.5497 32.7112 27.4065 33.6003 25.1709 33.6028ZM8.43181 1.84453C6.6855 1.84697 5.01142 2.54177 3.7766 3.7766C2.54177 5.01142 1.84697 6.68551 1.84453 8.43182V25.1709C1.84697 26.9173 2.54177 28.5913 3.7766 29.8262C5.01142 31.061 6.6855 31.7558 8.43181 31.7582H25.1709C26.9173 31.7558 28.5913 31.061 29.8262 29.8262C31.061 28.5913 31.7558 26.9173 31.7582 25.1709V8.43182C31.7558 6.68551 31.061 5.01142 29.8262 3.7766C28.5913 2.54177 26.9173 1.84697 25.1709 1.84453H8.43181Z" fill="url(#paint0_linear_303_636)"/>
      <path d="M11.1756 13.449L10.2302 14.7517L17.613 20.11L17.6614 20.1469L18.6067 18.8442L11.1756 13.449Z" fill="url(#paint1_linear_303_636)"/>
      <path d="M15.9483 13.449L15.003 14.7517L22.4364 20.1469L23.3818 18.8442L15.9483 13.449Z" fill="url(#paint2_linear_303_636)"/>
      <path d="M16.8083 6.78097C12.8057 6.78097 9.55006 9.26879 9.55006 12.3261V12.3883H11.164V12.3261C11.164 10.1565 13.7003 8.39032 16.8129 8.39032C19.9256 8.39032 22.4618 10.1565 22.4618 12.3261V12.3883H24.0758V12.3261C24.0665 9.26879 20.8109 6.78097 16.8083 6.78097Z" fill="url(#paint3_linear_303_636)"/>
      <path d="M22.4456 21.2767C22.4456 23.4463 19.9094 25.2125 16.7945 25.2125C13.6795 25.2125 11.1456 23.4463 11.1456 21.2767V21.2144H9.53161V21.2767C9.53161 24.334 12.7872 26.8218 16.7898 26.8218C20.7925 26.8218 24.0481 24.334 24.0481 21.2767V21.2144H22.4341L22.4456 21.2767Z" fill="url(#paint4_linear_303_636)"/>
      <path d="M51.3426 7.3597C53.0008 7.3597 54.4303 7.70279 55.6311 8.38895C56.8319 9.05606 57.8326 10.0472 58.6331 11.3623L56.7176 12.849C56.0123 11.6292 55.2118 10.7715 54.316 10.2759C53.4392 9.76128 52.3718 9.50397 51.1139 9.50397C50.1037 9.50397 49.265 9.64692 48.5979 9.93282C47.9499 10.2187 47.4734 10.5999 47.1684 11.0764C46.8635 11.5339 46.711 12.058 46.711 12.6489C46.711 13.316 46.9206 13.9069 47.34 14.4215C47.7593 14.9171 48.5979 15.3078 49.8559 15.5937L53.9443 16.5086C55.755 16.9088 57.013 17.5188 57.7182 18.3384C58.4425 19.1389 58.8047 20.1395 58.8047 21.3403C58.8047 22.4077 58.4997 23.3607 57.8898 24.1994C57.2989 25.019 56.4603 25.6575 55.3738 26.1149C54.2874 26.5724 53.0104 26.8011 51.5427 26.8011C50.1704 26.8011 48.9601 26.62 47.9118 26.2579C46.8825 25.8767 45.9962 25.3716 45.2529 24.7426C44.5095 24.1136 43.8996 23.4084 43.4231 22.6269L45.4244 20.9973C45.7866 21.7215 46.2535 22.3601 46.8253 22.9128C47.3971 23.4655 48.0833 23.8944 48.8838 24.1994C49.7034 24.5043 50.6374 24.6568 51.6857 24.6568C52.6577 24.6568 53.4964 24.5424 54.2016 24.3137C54.9259 24.0659 55.4787 23.7133 55.8599 23.2559C56.2411 22.7794 56.4317 22.2076 56.4317 21.5405C56.4317 20.9305 56.2315 20.3873 55.8313 19.9108C55.431 19.4153 54.6781 19.0436 53.5726 18.7958L49.1411 17.7951C47.9785 17.5283 47.035 17.1662 46.3107 16.7087C45.6055 16.2322 45.0909 15.6795 44.7668 15.0505C44.4619 14.4024 44.3094 13.7067 44.3094 12.9634C44.3094 11.9532 44.5858 11.0288 45.1385 10.1901C45.7103 9.33243 46.5204 8.64626 47.5687 8.13164C48.6361 7.61701 49.894 7.3597 51.3426 7.3597Z" fill="white"/>
      <path d="M65.1124 8.16023V22.5697C65.1124 23.2749 65.3125 23.7991 65.7128 24.1422C66.113 24.4853 66.6277 24.6568 67.2566 24.6568C67.8094 24.6568 68.2859 24.5615 68.6862 24.3709C69.0864 24.1803 69.4486 23.923 69.7726 23.599L70.5731 25.5145C70.1347 25.9148 69.6106 26.2293 69.0007 26.458C68.4098 26.6867 67.7236 26.8011 66.9422 26.8011C66.2179 26.8011 65.5412 26.6772 64.9122 26.4294C64.2833 26.1626 63.7782 25.7528 63.397 25.2C63.0348 24.6282 62.8442 23.8849 62.8252 22.97V8.78922L65.1124 8.16023ZM70.3158 12.22V14.1928H65.141H59.9661V12.22H70.3158Z" fill="white"/>
      <path d="M77.4618 26.8011C76.5469 26.8011 75.6797 26.6295 74.8601 26.2865C74.0596 25.9434 73.402 25.3906 72.8874 24.6282C72.3918 23.8467 72.144 22.8366 72.144 21.5976V12.22H74.4312V20.9973C74.4312 22.4458 74.7457 23.4465 75.3747 23.9992C76.0037 24.5329 76.89 24.7998 78.0336 24.7998C78.5673 24.7998 79.0914 24.714 79.6061 24.5424C80.1207 24.3518 80.5781 24.0659 80.9784 23.6847C81.3977 23.2845 81.7217 22.7794 81.9505 22.1695C82.1983 21.5595 82.3221 20.8352 82.3221 19.9966V12.22H84.6094V26.5152H82.608L82.4651 24.3423C81.9695 25.2 81.2929 25.829 80.4352 26.2293C79.5965 26.6105 78.6054 26.8011 77.4618 26.8011Z" fill="white"/>
      <path d="M94.0781 26.8011C92.8964 26.8011 91.8099 26.5056 90.8188 25.9148C89.8277 25.3239 89.0367 24.4757 88.4458 23.3702C87.855 22.2457 87.5595 20.9115 87.5595 19.3676C87.5595 17.7856 87.874 16.4419 88.503 15.3364C89.132 14.2309 89.9611 13.3922 90.9904 12.8204C92.0196 12.2296 93.1251 11.9341 94.3068 11.9341C95.4885 11.9341 96.5083 12.2391 97.366 12.849C98.2427 13.459 98.8241 14.269 99.11 15.2792L98.8241 15.4793V5.64429H101.111V26.5152H99.11L98.9098 23.0558L99.2243 22.8842C99.0909 23.7229 98.7669 24.4376 98.2523 25.0285C97.7567 25.6003 97.1373 26.0387 96.3939 26.3436C95.6696 26.6486 94.8977 26.8011 94.0781 26.8011ZM94.3068 24.7998C95.2217 24.7998 96.0127 24.571 96.6798 24.1136C97.366 23.6561 97.8901 23.0081 98.2523 22.1695C98.6335 21.3117 98.8241 20.3111 98.8241 19.1675C98.8241 18.081 98.6335 17.1471 98.2523 16.3656C97.8901 15.5842 97.3755 14.9838 96.7084 14.5644C96.0604 14.1451 95.2979 13.9355 94.4212 13.9355C92.9726 13.9355 91.8481 14.431 91.0475 15.4222C90.247 16.4133 89.8467 17.7284 89.8467 19.3676C89.8467 21.0068 90.2375 22.3219 91.0189 23.3131C91.8004 24.3042 92.8964 24.7998 94.3068 24.7998Z" fill="white"/>
      <path d="M106.142 9.47538C105.627 9.47538 105.208 9.3229 104.884 9.01794C104.579 8.69391 104.426 8.27459 104.426 7.75997C104.426 7.24534 104.579 6.83555 104.884 6.53058C105.208 6.20656 105.627 6.04455 106.142 6.04455C106.656 6.04455 107.066 6.20656 107.371 6.53058C107.695 6.83555 107.857 7.24534 107.857 7.75997C107.857 8.27459 107.695 8.69391 107.371 9.01794C107.066 9.3229 106.656 9.47538 106.142 9.47538ZM107.285 12.22V26.5152H104.998V12.22H107.285Z" fill="white"/>
      <path d="M117.081 11.9341C118.434 11.9341 119.626 12.2296 120.655 12.8204C121.703 13.4113 122.523 14.269 123.114 15.3936C123.705 16.4991 124 17.8237 124 19.3676C124 20.9115 123.705 22.2457 123.114 23.3702C122.523 24.4757 121.703 25.3239 120.655 25.9148C119.626 26.5056 118.434 26.8011 117.081 26.8011C115.747 26.8011 114.556 26.5056 113.507 25.9148C112.459 25.3239 111.64 24.4757 111.049 23.3702C110.458 22.2457 110.162 20.9115 110.162 19.3676C110.162 17.8237 110.458 16.4991 111.049 15.3936C111.64 14.269 112.459 13.4113 113.507 12.8204C114.556 12.2296 115.747 11.9341 117.081 11.9341ZM117.081 13.9069C116.109 13.9069 115.28 14.1261 114.594 14.5644C113.908 15.0028 113.374 15.6318 112.993 16.4514C112.631 17.2519 112.45 18.224 112.45 19.3676C112.45 20.4922 112.631 21.4642 112.993 22.2838C113.374 23.1034 113.908 23.7324 114.594 24.1708C115.28 24.6092 116.109 24.8283 117.081 24.8283C118.053 24.8283 118.882 24.6092 119.569 24.1708C120.255 23.7324 120.779 23.1034 121.141 22.2838C121.522 21.4642 121.713 20.4922 121.713 19.3676C121.713 18.224 121.522 17.2519 121.141 16.4514C120.779 15.6318 120.255 15.0028 119.569 14.5644C118.882 14.1261 118.053 13.9069 117.081 13.9069Z" fill="white"/>
      <defs>
      <linearGradient id="paint0_linear_303_636" x1="34" y1="-1.19783e-08" x2="1.19784e-08" y2="34" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F7A7DB"/>
      <stop offset="1" stop-color="#DE1978"/>
      </linearGradient>
      <linearGradient id="paint1_linear_303_636" x1="34" y1="-1.19783e-08" x2="1.19784e-08" y2="34" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F7A7DB"/>
      <stop offset="1" stop-color="#DE1978"/>
      </linearGradient>
      <linearGradient id="paint2_linear_303_636" x1="34" y1="-1.19783e-08" x2="1.19784e-08" y2="34" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F7A7DB"/>
      <stop offset="1" stop-color="#DE1978"/>
      </linearGradient>
      <linearGradient id="paint3_linear_303_636" x1="34" y1="-1.19783e-08" x2="1.19784e-08" y2="34" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F7A7DB"/>
      <stop offset="1" stop-color="#DE1978"/>
      </linearGradient>
      <linearGradient id="paint4_linear_303_636" x1="34" y1="-1.19783e-08" x2="1.19784e-08" y2="34" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F7A7DB"/>
      <stop offset="1" stop-color="#DE1978"/>
      </linearGradient>
      </defs>
    </svg>
  )
}