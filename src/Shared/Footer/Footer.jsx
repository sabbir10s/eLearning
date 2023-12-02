import whiteLogo from "../../Assets/Images/others/whiteLogo.png";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-secondary pt-[36px] md:pt-[44px] lg:pt-[64px] pb-[20px] md:pb-[36px] lg:pb-[48px] px-2 md:px-0">
      <div className="container mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 lg::gap-32">
          <div className=" col-span-1">
            <img src={whiteLogo} alt="" />
            <p className="text-[16px] pt-[16px] sm:pt-[26px] md:pt-[36px]">
              Top learning experiences that create more talent in the world.
            </p>
          </div>
          <div className="md:col-span-2 grid gap-10 sm:gap-0 grid-cols-2 sm:grid-cols-4">
            <div className="space-y-4">
              <h6 className="text-secondary-400">Product</h6>
              <div className="flex flex-col gap-2.5">
                <a href="">OverView</a>
                <a href="">Feature</a>
                <a href="">Solution</a>
                <a href="">Tutorials</a>
                <a href="">Pricing</a>
              </div>
            </div>
            <div className="space-y-4">
              <h6 className="text-secondary-400">Company</h6>
              <div className="flex flex-col gap-2.5">
                <a href="">About us</a>
                <a href="">Careers</a>
                <a href="">
                  Press{" "}
                  <span className="text-xs bg-white text-secondary font-medium rounded-full px-1.5 py">
                    New
                  </span>
                </a>
                <a href="">Tutorials</a>
                <a href="">Pricing</a>
              </div>
            </div>
            <div className="space-y-4">
              <h6 className="text-secondary-400">Social</h6>
              <div className="flex flex-col gap-2.5">
                <a href="">Twitter</a>
                <a href="">LinkedIn</a>
                <a href="">GitHub</a>
                <a href="">Dribble</a>
              </div>
            </div>
            <div className="space-y-4">
              <h6 className="text-secondary-400">Legal</h6>
              <div className="flex flex-col gap-2.5">
                <a href="">Terms</a>
                <a href="">Privacy</a>
                <a href="">Cookies</a>
                <a href="">Contact</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center justify-between pt-10 md:pt-16 lg:pt-24">
          <p className="text-secondary-400">
            &copy; {year} Ed-Circle. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sabbir10s/"
            >
              <svg
                className="text-secondary-400 fill-current hover:text-primary duration-300"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.2918 17.125C13.8371 17.125 17.9652 10.8723 17.9652 5.45161C17.9652 5.27583 17.9613 5.09614 17.9535 4.92036C18.7566 4.33961 19.4496 3.62027 20 2.79614C19.2521 3.12889 18.458 3.34621 17.6449 3.44067C18.5011 2.92748 19.1421 2.12129 19.4492 1.17153C18.6438 1.64886 17.763 1.98557 16.8445 2.16724C16.2257 1.5097 15.4075 1.07432 14.5164 0.928437C13.6253 0.782549 12.711 0.93427 11.9148 1.36014C11.1186 1.78601 10.4848 2.46232 10.1115 3.28449C9.73825 4.10666 9.64619 5.02891 9.84961 5.90864C8.21874 5.8268 6.62328 5.40315 5.16665 4.66514C3.71002 3.92714 2.42474 2.89126 1.39414 1.62466C0.870333 2.52776 0.710047 3.59643 0.945859 4.61347C1.18167 5.63051 1.79589 6.5196 2.66367 7.10005C2.01219 7.07937 1.37498 6.90396 0.804688 6.58833V6.63911C0.804104 7.58685 1.13175 8.50555 1.73192 9.23904C2.3321 9.97252 3.16777 10.4755 4.09687 10.6625C3.49338 10.8277 2.85999 10.8517 2.2457 10.7329C2.50788 11.5479 3.01798 12.2608 3.70481 12.772C4.39164 13.2832 5.22093 13.5672 6.07695 13.5844C4.62369 14.726 2.82848 15.3452 0.980469 15.3422C0.652739 15.3417 0.325333 15.3216 0 15.2821C1.87738 16.4865 4.06128 17.1262 6.2918 17.125Z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sabbir10s/"
            >
              <svg
                className="text-secondary-400 fill-current hover:text-primary duration-300"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" />
              </svg>
            </a>
            <a target="_blank" rel="noreferrer" href="https://facebook.com/">
              <svg
                className="text-secondary-400 fill-current hover:text-primary duration-300"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_783)">
                  <path d="M24 12.2856C24 5.65822 18.6274 0.285645 12 0.285645C5.37258 0.285645 0 5.65822 0 12.2856C0 18.2751 4.3882 23.2396 10.125 24.1399V15.7544H7.07812V12.2856H10.125V9.6419C10.125 6.6344 11.9166 4.97314 14.6576 4.97314C15.9701 4.97314 17.3438 5.20752 17.3438 5.20752V8.16064H15.8306C14.34 8.16064 13.875 9.08572 13.875 10.0356V12.2856H17.2031L16.6711 15.7544H13.875V24.1399C19.6118 23.2396 24 18.2751 24 12.2856Z" />
                </g>
                <defs>
                  <clipPath id="clip0_1_783">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.285645)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/">
              <svg
                className="text-secondary-400 fill-current hover:text-primary duration-300"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0.285645C5.3724 0.285645 0 5.66644 0 12.306C0 17.616 3.438 22.122 8.2068 23.7108C8.8068 23.8212 9.0252 23.4504 9.0252 23.1312C9.0252 22.8468 9.0156 22.0896 9.0096 21.0876C5.6712 21.8136 4.9668 19.476 4.9668 19.476C4.422 18.0864 3.6348 17.7168 3.6348 17.7168C2.5452 16.9728 3.7176 16.9872 3.7176 16.9872C4.9212 17.0712 5.5548 18.2256 5.5548 18.2256C6.6252 20.0616 8.364 19.5312 9.0468 19.224C9.1572 18.4476 9.4668 17.9184 9.81 17.6184C7.146 17.3148 4.344 16.2828 4.344 11.6772C4.344 10.3656 4.812 9.29164 5.5788 8.45164C5.4552 8.14804 5.0436 6.92524 5.6964 5.27164C5.6964 5.27164 6.7044 4.94764 8.9964 6.50284C9.97532 6.23586 10.9853 6.09988 12 6.09844C13.02 6.10324 14.046 6.23644 15.0048 6.50284C17.2956 4.94764 18.3012 5.27044 18.3012 5.27044C18.9564 6.92524 18.5436 8.14804 18.4212 8.45164C19.1892 9.29164 19.6548 10.3656 19.6548 11.6772C19.6548 16.2948 16.848 17.3112 14.1756 17.6088C14.6064 17.9796 14.9892 18.7128 14.9892 19.8348C14.9892 21.4404 14.9748 22.7376 14.9748 23.1312C14.9748 23.4528 15.1908 23.8272 15.8004 23.7096C18.19 22.9082 20.2672 21.376 21.7386 19.3297C23.2099 17.2834 24.001 14.8264 24 12.306C24 5.66644 18.6264 0.285645 12 0.285645Z"
                />
              </svg>
            </a>
            <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
              <svg
                className="text-secondary-400 fill-current hover:text-primary duration-300"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0.285645C5.37527 0.285645 0 5.66092 0 12.2856C0 18.9104 5.37527 24.2856 12 24.2856C18.6117 24.2856 24 18.9104 24 12.2856C24 5.66092 18.6117 0.285645 12 0.285645ZM19.9262 5.8171C21.3579 7.56113 22.217 9.78672 22.243 12.1945C21.9046 12.1295 18.5206 11.4396 15.1106 11.8692C15.0325 11.7 14.9675 11.5177 14.8894 11.3355C14.6811 10.841 14.4469 10.3334 14.2126 9.85182C17.9869 8.31604 19.705 6.10343 19.9262 5.8171ZM12 2.05571C14.603 2.05571 16.9848 3.03185 18.7939 4.63272C18.6117 4.89302 17.0629 6.96244 13.4186 8.32902C11.7397 5.24443 9.87855 2.71948 9.5922 2.32903C10.3601 2.14681 11.1671 2.05571 12 2.05571ZM7.63995 3.01883C7.91325 3.38326 9.73538 5.92122 11.4404 8.94072C6.65076 10.2162 2.42083 10.1902 1.96529 10.1902C2.62907 7.01449 4.77657 4.37241 7.63995 3.01883ZM1.74404 12.2987C1.74404 12.1945 1.74404 12.0904 1.74404 11.9863C2.18655 11.9993 7.15835 12.0644 12.2733 10.5286C12.5727 11.1012 12.846 11.6869 13.1063 12.2726C12.9761 12.3117 12.8329 12.3507 12.7028 12.3897C7.41865 14.0947 4.60738 18.7542 4.3731 19.1446C2.7462 17.3355 1.74404 14.9277 1.74404 12.2987ZM12 22.5416C9.6312 22.5416 7.44469 21.7347 5.71367 20.3811C5.89588 20.0037 7.97827 15.995 13.757 13.9776C13.783 13.9646 13.7961 13.9646 13.8221 13.9516C15.2668 17.6869 15.8525 20.8236 16.0087 21.7216C14.7722 22.2552 13.4186 22.5416 12 22.5416ZM17.7136 20.7846C17.6096 20.1598 17.0629 17.1663 15.7223 13.483C18.9371 12.9754 21.7484 13.8084 22.0998 13.9256C21.6573 16.7759 20.0173 19.2357 17.7136 20.7846Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
