import PropTypes from 'prop-types';

function Rick({styles}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={styles} viewBox="0 0 376 376">
            <path d="M92.2871 10.1699C90.3999 25.8964 84.8432 45.0828 82.1173 45.0828C81.3834 45.0828 76.3509 42.986 71.0038 40.4697C62.4067 36.4856 49.3012 32.5016 44.4784 32.5016C43.2202 32.5016 43.8493 34.3888 46.8898 40.5746C51.5029 49.9057 55.6966 64.4789 55.1724 69.5114L54.8579 72.8664L45.422 73.6004C17.9529 75.6972 5.05709 76.9554 5.05709 77.4796C5.05709 77.899 9.67022 82.8266 15.3318 88.593C25.921 99.2871 33.6795 110.715 33.1552 114.699C32.9455 116.167 27.5985 120.57 16.5899 128.224C7.67819 134.41 0.234278 139.966 0.0245907 140.491C-0.185097 141.015 0.968185 141.749 2.64569 142.168C13.864 144.58 18.6868 146.152 22.6709 148.459C28.1227 151.709 33.7843 156.532 36.6151 160.516L38.712 163.451L26.9694 175.089C17.1141 184.944 15.4366 186.937 16.6948 188.09C17.5335 188.824 23.8241 191.235 30.7438 193.332C37.6635 195.429 43.7445 197.631 44.2687 198.155C44.7929 198.679 43.9541 204.026 41.9621 211.365C40.1798 218.18 39.0265 224.156 39.341 224.68C39.8652 225.624 57.1645 224.785 59.9952 223.737C62.6163 222.793 63.6648 225.309 64.3987 233.592C64.8181 238.415 65.4471 242.504 65.8665 242.713C66.7052 243.238 78.4478 238.205 78.4478 237.366C78.4478 237.052 77.0848 234.85 75.4073 232.439C70.5845 225.414 67.3343 218.18 64.2938 208.115C62.826 202.873 60.6243 195.848 59.5759 192.388C58.4226 188.929 57.2693 184.211 57.0596 181.904C55.5918 170.791 55.3821 166.702 56.4306 166.702C56.9548 166.702 57.479 168.484 57.479 170.581C57.5838 175.299 59.8904 187.88 61.4631 192.388C62.0921 194.066 64.0842 200.252 65.8665 206.018C70.1651 219.543 76.3509 231.705 81.6979 237.052C84.2142 239.568 89.666 243.133 94.9082 245.544L103.715 249.633L103.401 253.512L103.086 257.392L79.7059 265.15L56.3257 273.013L53.2852 282.973C51.6077 288.53 46.8898 304.991 42.696 319.669C38.5023 334.242 34.5182 346.823 33.8891 347.452C33.2601 348.081 31.3729 353.743 29.8002 360.138C28.2276 366.429 26.7598 372.51 26.4452 373.454C25.921 375.236 30.1148 375.341 104.554 375.341C179.098 375.341 183.292 375.236 183.292 373.454C183.292 372.51 178.364 367.058 172.283 361.397C166.202 355.735 161.274 350.493 161.274 349.654C161.274 348.92 165.049 345.041 169.557 341.057C181.09 331.202 181.195 330.573 176.477 318.515C168.509 298.281 151.419 267.037 145.128 261.166C143.136 259.279 142.402 257.496 142.402 254.666C142.402 250.367 143.346 249.319 148.693 247.536C154.145 245.754 159.492 241.665 163.162 236.528C166.097 232.439 167.355 231.705 175.428 229.189C180.356 227.616 184.34 225.938 184.34 225.519C184.34 224.995 182.453 222.269 180.146 219.543C175.638 214.091 174.799 210.212 177.84 209.268C178.783 208.954 182.453 208.429 185.913 208.01C189.372 207.696 192.518 207.171 192.937 206.857C193.881 206.437 188.534 191.55 187.276 191.025C186.856 190.816 186.437 189.872 186.437 188.824C186.437 187.566 187.905 186.622 191.679 185.678C198.179 184.001 213.696 176.557 213.696 175.194C213.696 174.565 211.704 173.097 209.293 171.839C195.873 165.024 184.969 157.161 187.171 155.903C187.59 155.693 191.469 154.435 195.663 153.177C199.857 151.919 206.672 149.298 210.865 147.41C218.1 144.16 232.988 135.353 232.358 134.724C231.939 134.41 203.526 122.248 200.8 121.304C199.542 120.78 199.228 120.151 199.752 119.207C200.171 118.369 207.091 111.659 215.059 104.32C222.923 96.8757 229.423 90.4802 229.423 90.0608C229.423 89.2221 222.922 88.0688 203.736 85.3429C196.816 84.2944 190.735 83.246 190.316 82.8266C189.792 82.4072 194.615 73.181 201.01 62.3821C211.39 44.6635 213.382 40.8891 212.333 40.8891C212.124 40.8891 203.526 43.9296 193.252 47.7039C178.259 53.1558 174.17 54.2043 173.122 53.1558C170.815 50.8493 168.613 33.55 168.613 18.0331V3.04048L160.121 7.54876C150.161 12.8958 136.846 23.2753 130.66 30.5096C128.353 33.3403 125.942 35.6469 125.523 35.6469C124.998 35.6469 121.014 30.8241 116.506 24.848C108.748 14.5733 95.6421 6.4671e-06 94.1743 6.4671e-06C93.7549 6.4671e-06 92.9162 4.61313 92.2871 10.1699ZM95.2228 272.908C91.3435 275.949 71.5281 328.266 73.1007 330.992C73.6249 331.935 78.1332 336.234 83.1657 340.638C88.3031 345.041 92.6017 349.13 92.8114 349.759C93.021 350.388 91.7629 352.695 89.9806 354.896C88.3031 357.098 86.8353 358.251 86.8353 357.517C86.8353 356.888 87.7788 355.001 89.037 353.533L91.2387 350.703L81.1737 341.267C74.1492 334.661 71.1087 331.097 71.1087 329.419C71.1087 326.064 83.0609 293.982 90.3999 277.522C92.1823 273.537 93.6501 271.545 94.9082 271.545C96.5857 271.65 96.5857 271.755 95.2228 272.908Z" fill="rgb(220, 220, 220)"/>
        </svg>
    )
}

export default Rick;

Rick.propTypes = {
    styles: PropTypes.object.isRequired
  };
