import Linkedin from 'remixicon-react/LinkedinBoxFillIcon'
import Github from 'remixicon-react/GithubFillIcon'
import Terminal from 'remixicon-react/CodeBoxLineIcon'
import Instagram from 'remixicon-react/InstagramFillIcon'


function Tecnologies() {
    return (
        <div className='text-black dark:text-white m-auto mt-14 w-5/6'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl font-bold flex gap-1'><Terminal color='#22c55e' />Tecnologias</h1>
                <div className='flex'>
                    <h2>Por que me</h2>
                    <h2 className='text-green-500'>‎ escolher?</h2>
                </div>
                <p>Sempre me inovando e trabalhando com as melhores tecnologias e ferramentas da atualidade,
                    possuo conhecimento para fazer o seu projeto ser o melhor do mercado.</p>
            </div>
            <div class="ling-banner" id="tecnologias">

                <div className='mt-10 flex '>
                    <div className='flex flex-col items-center mx-auto'><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <path d="M0 64V0H64V64H0Z" fill="#FFD600" />
                        <path d="M41.8454 47.9058C43.0756 49.904 44.4125 51.8187 47.2445 51.8187C49.6231 51.8187 50.8712 50.6365 50.8712 49.0009C50.8712 47.0436 49.5805 46.3485 46.9636 45.2089L45.5289 44.5973C41.3885 42.8409 38.6347 40.64 38.6347 35.9911C38.6347 31.7067 41.9147 28.4462 47.04 28.4462C50.6898 28.4462 53.312 29.7102 55.2036 33.0205L50.7343 35.8773C49.7511 34.1209 48.688 33.4293 47.04 33.4293C45.3583 33.4293 44.2934 34.4907 44.2934 35.8773C44.2934 37.5911 45.36 38.2845 47.8223 39.3458L49.2569 39.9573C54.1369 42.0356 56.8889 44.1582 56.8889 48.9298C56.8889 54.0711 52.8285 56.8889 47.3778 56.8889C42.0463 56.8889 39.0187 54.2133 37.3334 50.9013L41.8454 47.9058ZM21.248 48.0516C22.1476 49.6622 23.5147 50.9013 25.4809 50.9013C27.3618 50.9013 28.4445 50.1582 28.4445 47.2693V28.4445H34.3698V48.1796C34.3698 54.1653 30.8978 56.8889 25.8276 56.8889C21.2463 56.8889 17.9396 53.7849 16.592 50.9013L21.248 48.0516Z" fill="#000001" />
                    </svg>
                    <p className='hidden md:block'>JavaScript</p>
                    </div>
                    <div  className='flex flex-col items-center mx-auto'><svg width="64" height="64" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.6552 0.177246H2.62853C1.59981 0.177246 0.765869 1.01119 0.765869 2.03991V38.0666C0.765869 39.0953 1.59981 39.9292 2.62853 39.9292H38.6552C39.6839 39.9292 40.5179 39.0953 40.5179 38.0666V2.03991C40.5179 1.01119 39.6839 0.177246 38.6552 0.177246Z" fill="#3178C6" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8291 31.0688V35.4244C24.6205 35.8151 25.4639 36.09 26.3335 36.2408C27.3384 36.4263 28.3584 36.5175 29.3802 36.5134C30.3761 36.5181 31.3697 36.4177 32.3446 36.2138C33.2198 36.0369 34.0548 35.7 34.8078 35.22C35.5067 34.7688 36.0828 34.1512 36.4844 33.4226C37.2037 31.914 37.2986 30.1824 36.7485 28.6041C36.5164 28.0139 36.1705 27.4751 35.7306 27.0183C35.2583 26.5326 34.7219 26.1137 34.1362 25.7732C33.4619 25.3783 32.7613 25.0301 32.0393 24.7312C31.4714 24.4955 30.9603 24.2664 30.506 24.044C30.1025 23.8508 29.7163 23.6233 29.3518 23.364C29.0663 23.1638 28.8183 22.9149 28.6192 22.6286C28.4472 22.3686 28.3577 22.0628 28.3623 21.7512C28.3585 21.4643 28.4384 21.1826 28.5923 20.9405C28.7594 20.6871 28.9823 20.4754 29.2439 20.3215C29.5637 20.1332 29.9117 19.9976 30.2746 19.9197C30.7201 19.8208 31.1755 19.7731 31.6319 19.7778C32.0157 19.7791 32.3989 19.8066 32.779 19.8601C33.1894 19.9156 33.5955 19.9996 33.9943 20.1114C34.3999 20.2238 34.7966 20.3662 35.1811 20.5373C35.5543 20.7037 35.9112 20.9042 36.2473 21.1364V17.0718C35.5476 16.8071 34.8219 16.6167 34.0823 16.5039C33.1891 16.374 32.2873 16.3127 31.3848 16.3208C30.3983 16.3155 29.4146 16.4275 28.4545 16.6544C27.5867 16.8527 26.7616 17.2052 26.0183 17.6951C25.3279 18.155 24.7578 18.7738 24.3558 19.4995C23.9299 20.3054 23.7191 21.2077 23.7439 22.1189C23.7125 23.3239 24.1094 24.5011 24.8641 25.441C25.79 26.4832 26.9576 27.2822 28.2643 27.7679C28.8606 28.014 29.4166 28.2549 29.9325 28.4906C30.3979 28.6976 30.8452 28.9432 31.2698 29.2245C31.6123 29.4473 31.9131 29.7284 32.1586 30.0551C32.3744 30.3514 32.4889 30.7093 32.4851 31.0759C32.4871 31.3505 32.4165 31.6208 32.2807 31.8595C32.1297 32.116 31.9175 32.3312 31.6631 32.4856C31.3447 32.6797 30.9965 32.8198 30.6324 32.9002C30.1581 33.0062 29.673 33.0563 29.1871 33.0493C28.2335 33.0475 27.2875 32.8794 26.3917 32.5524C25.4558 32.2146 24.588 31.7122 23.8291 31.0688ZM16.5119 20.225H22.1908V16.6374H6.35669V20.225H12.01V36.2024H16.5119V20.225Z" fill="white" />
                    </svg>
                    <p className='hidden md:block'>TypeScript</p>
                    </div>
                    <div  className='flex flex-col items-center mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="64" viewBox="0 0 71 64" fill="none"><g clip-path="url(#clip0_12_825)"><path d="M35.7728 38.7725C39.4451 38.7725 42.4221 35.7404 42.4221 32C42.4221 28.2597 39.4451 25.2275 35.7728 25.2275C32.1004 25.2275 29.1234 28.2597 29.1234 32C29.1234 35.7404 32.1004 38.7725 35.7728 38.7725Z" fill="#087EA4" /><path d="M35.7728 47.238C54.1344 47.238 69.0195 40.4157 69.0195 31.9999C69.0195 23.5842 54.1344 16.7618 35.7728 16.7618C17.4111 16.7618 2.526 23.5842 2.526 31.9999C2.526 40.4157 17.4111 47.238 35.7728 47.238Z" stroke="#087EA4" stroke-width="3" /><path d="M22.8161 39.619C31.9969 55.8152 45.2403 65.5336 52.3961 61.3257C59.5518 57.1178 57.9102 40.5771 48.7293 24.3809C39.5485 8.18475 26.3051 -1.53366 19.1493 2.67422C11.9936 6.88211 13.6352 23.4228 22.8161 39.619Z" stroke="#087EA4" stroke-width="3" /><path d="M22.8161 24.3808C13.6353 40.577 11.9936 57.1177 19.1494 61.3256C26.3051 65.5335 39.5486 55.8151 48.7294 39.6189C57.9102 23.4228 59.5519 6.88205 52.3961 2.67416C45.2404 -1.53372 31.997 8.18469 22.8161 24.3808Z" stroke="#087EA4" stroke-width="3" /></g><defs><clipPath id="clip0_12_825"><rect width="69.8182" height="64" fill="white" transform="translate(0.863647)" /></clipPath></defs></svg>
                        <p className='hidden md:block'>React</p>
                    </div>
                    <div className='flex flex-col items-center mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="64" viewBox="0 0 58 64" fill="none"><g clip-path="url(#clip0_12_843)"><path d="M29.0087 64C28.1507 64 27.3499 63.7668 26.6063 63.3586L18.999 58.7517C17.8551 58.1102 18.427 57.877 18.7702 57.7603C20.3146 57.2355 20.6006 57.1189 22.2021 56.1859C22.3737 56.0692 22.6025 56.1275 22.774 56.2442L28.6082 59.8014C28.8371 59.918 29.1231 59.918 29.2946 59.8014L52.1166 46.3307C52.3454 46.214 52.4598 45.9808 52.4598 45.6892V18.806C52.4598 18.5145 52.3454 18.2812 52.1166 18.1646L29.2946 4.75223C29.0659 4.63561 28.7798 4.63561 28.6082 4.75223L5.78631 18.1646C5.55752 18.2812 5.44312 18.5728 5.44312 18.806V45.6892C5.44312 45.9224 5.55752 46.214 5.78631 46.3307L12.0209 50.0045C15.3956 51.7539 17.5119 49.7129 17.5119 47.6719V21.1386C17.5119 20.7888 17.7979 20.4389 18.1982 20.4389H21.1154C21.4585 20.4389 21.8017 20.7305 21.8017 21.1386V47.6719C21.8017 52.2788 19.3422 54.9613 15.0523 54.9613C13.7368 54.9613 12.7073 54.9613 9.79014 53.5034L3.78439 50.0045C2.29725 49.1297 1.38208 47.4969 1.38208 45.7475V18.8644C1.38208 17.115 2.29725 15.4822 3.78439 14.6074L26.6063 1.13672C28.0363 0.320313 29.981 0.320313 31.411 1.13672L54.2329 14.6074C55.7201 15.4822 56.6352 17.115 56.6352 18.8644V45.7475C56.6352 47.4969 55.7201 49.1297 54.2329 50.0045L31.411 63.4752C30.7246 63.7668 29.8666 64 29.0087 64Z" fill="#5FA04E" /><path d="M36.1011 45.5142C26.0914 45.5142 24.0323 40.849 24.0323 36.8836C24.0323 36.5337 24.3183 36.1839 24.7187 36.1839H27.693C28.0361 36.1839 28.3222 36.4171 28.3222 36.767C28.7797 39.8576 30.0953 41.3738 36.1583 41.3738C40.9629 41.3738 43.022 40.2658 43.022 37.6417C43.022 36.1255 42.45 35.0175 34.9571 34.2594C28.7225 33.6179 24.8331 32.2184 24.8331 27.145C24.8331 22.4215 28.7225 19.6224 35.2431 19.6224C42.5644 19.6224 46.1679 22.1883 46.6255 27.7865C46.6255 27.9615 46.5683 28.1364 46.4539 28.3114C46.3395 28.4279 46.1679 28.5446 45.9963 28.5446H42.9648C42.6788 28.5446 42.3928 28.3114 42.3356 28.0197C41.6492 24.8124 39.8761 23.7627 35.1859 23.7627C29.9237 23.7627 29.2945 25.6289 29.2945 27.0284C29.2945 28.7195 30.0381 29.2444 37.1306 30.1774C44.166 31.1104 47.4834 32.4517 47.4834 37.4668C47.4834 42.5984 43.308 45.5142 36.1011 45.5142Z" fill="#5FA04E" /></g><defs><clipPath id="clip0_12_843"><rect width="56.32" height="64" fill="white" transform="translate(0.749146)" /></clipPath>
                        </defs>
                        </svg>
                        <p className='hidden md:block'>Node.Js</p>
                    </div>
                    <div className='flex flex-col items-center mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="64"  viewBox="0 0 24 24" fill="#35bef8"><path d="M11.9996 4.85999C8.82628 4.85999 6.84294 6.44665 6.04961 9.61999C7.23961 8.03332 8.62794 7.43832 10.2146 7.83499C11.12 8.06109 11.7666 8.71757 12.4835 9.44545C13.6507 10.6295 15.0004 12 17.9496 12C21.1229 12 23.1063 10.4133 23.8996 7.23998C22.7096 8.82665 21.3213 9.42165 19.7346 9.02499C18.8292 8.79889 18.1827 8.1424 17.4657 7.41452C16.2995 6.23047 14.9498 4.85999 11.9996 4.85999ZM6.04961 12C2.87628 12 0.892943 13.5867 0.0996094 16.76C1.28961 15.1733 2.67794 14.5783 4.26461 14.975C5.17 15.2011 5.81657 15.8576 6.53354 16.5855C7.70073 17.7695 9.05039 19.14 11.9996 19.14C15.1729 19.14 17.1563 17.5533 17.9496 14.38C16.7596 15.9667 15.3713 16.5617 13.7846 16.165C12.8792 15.9389 12.2326 15.2824 11.5157 14.5545C10.3495 13.3705 8.99982 12 6.04961 12Z"></path></svg>
                        <p className='hidden md:block'>TailWind</p>
                    </div>
                </div>
                <div class="flex mt-10">
                    
                <div className='flex flex-col items-center mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <path d="M56.2666 29.4666L34.5333 7.73329C33.8666 7.06663 32.9333 6.66663 32 6.66663C31.0666 6.66663 30.1333 7.06663 29.4666 7.73329L24.8 12.4L30.2666 17.8666C30.8 17.6 31.3333 17.4666 32 17.4666C34.2666 17.4666 36 19.2 36 21.4666C36 22.1333 35.8666 22.6666 35.6 23.2L40.9333 28.5333C41.4666 28.2666 42 28.1333 42.6666 28.1333C44.9333 28.1333 46.6666 29.8666 46.6666 32.1333C46.6666 34.4 44.9333 36.1333 42.6666 36.1333C40.4 36.1333 38.6666 34.4 38.6666 32.1333C38.6666 31.4666 38.8 30.9333 39.0666 30.4L33.7333 25.0666C33.6 25.0666 33.4666 25.2 33.3333 25.2V39.0666C34.9333 39.6 36 41.0666 36 42.8C36 45.0666 34.2666 46.8 32 46.8C29.7333 46.8 28 45.0666 28 42.8C28 41.0666 29.0666 39.6 30.6666 39.0666V25.0666C29.0666 24.5333 28 23.0666 28 21.3333C28 20.6666 28.1333 20.1333 28.4 19.6L22.9333 14.1333L7.73329 29.4666C7.06663 30.1333 6.66663 31.0666 6.66663 32C6.66663 32.9333 7.06663 33.8666 7.73329 34.5333L29.4666 56.2666C30.1333 56.9333 31.0666 57.3333 32 57.3333C32.9333 57.3333 33.8666 56.9333 34.5333 56.2666L56.2666 34.5333C56.9333 33.8666 57.3333 32.9333 57.3333 32C57.3333 31.0666 56.9333 30.1333 56.2666 29.4666Z" fill="#F4511E" />
                        </svg>
                        <p className='hidden md:block'>Git</p>
                    </div>
                    <div className='flex flex-col items-center mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="69" viewBox="0 0 76 69" fill="none"><path d="M37.8098 6.5495C35.336 6.56019 32.9746 6.75216 30.8957 7.08798C24.7727 8.07511 23.6617 10.1413 23.6617 13.9524V18.9849H38.1303V20.6623H18.2313C14.0266 20.6623 10.3446 22.9687 9.1926 27.3578C7.86369 32.387 7.8051 35.5259 9.1926 40.7776C10.2209 44.6871 12.6772 47.472 16.8824 47.472H21.8576V41.4391C21.8576 37.0804 25.9891 33.2362 30.8963 33.2362H45.3485C49.3715 33.2362 52.5824 30.2128 52.5824 26.5263V13.953C52.5824 10.374 49.2742 7.68582 45.3485 7.08851C42.8617 6.71099 40.283 6.53934 37.8098 6.5495ZM29.9852 10.5969C31.4793 10.5969 32.7004 11.729 32.7004 13.1214C32.7004 14.508 31.4799 15.6294 29.9852 15.6294C28.4852 15.6294 27.2705 14.508 27.2705 13.1214C27.2699 11.729 28.4852 10.5969 29.9852 10.5969Z" fill="url(#paint0_linear_12_1234)" /><path d="M54.3866 20.6623V26.5262C54.3866 31.0715 50.1631 34.8976 45.3479 34.8976H30.8957C26.9371 34.8976 23.6617 37.99 23.6617 41.608V54.1824C23.6617 57.7603 27.0707 59.8656 30.8957 60.8918C35.4754 62.1201 39.8676 62.3425 45.3479 60.8918C48.9901 59.9287 52.5819 57.9919 52.5819 54.1824V49.1494H38.1303V47.4714H59.817C64.0217 47.4714 65.5897 44.7951 67.0522 40.777C68.5627 36.6408 68.4977 32.6629 67.0522 27.3572C66.0127 23.5365 64.0282 20.6617 59.817 20.6617H54.3866V20.6623ZM46.2578 52.5044C47.7584 52.5044 48.9731 53.6257 48.9731 55.0134C48.9731 56.4048 47.7578 57.5368 46.2578 57.5368C44.7637 57.5368 43.5432 56.4048 43.5432 55.0134C43.5432 53.6257 44.7637 52.5044 46.2578 52.5044Z" fill="url(#paint1_linear_12_1234)" /><path opacity="0.444" d="M57.6836 63.9531C57.6836 65.8477 49.0024 67.384 38.2944 67.384C27.5858 67.384 18.9045 65.8477 18.9045 63.9531C18.9045 62.058 27.5852 60.5217 38.2944 60.5217C49.0024 60.5217 57.6836 62.0575 57.6836 63.9531Z" fill="url(#paint2_radial_12_1234)" /><defs><linearGradient id="paint0_linear_12_1234" x1="6.72339" y1="8.12304" x2="37.495" y2="36.8774" gradientUnits="userSpaceOnUse"><stop stop-color="#5A9FD4" /><stop offset="1" stop-color="#306998" /></linearGradient><linearGradient id="paint1_linear_12_1234" x1="52.6503" y1="50.24" x2="42.0878" y2="34.0095" gradientUnits="userSpaceOnUse"><stop stop-color="#FFD43B" /><stop offset="1" stop-color="#FFE873" /></linearGradient><radialGradient id="paint2_radial_12_1234" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(38.216 63.8549) rotate(-90) scale(3.43213 16.5316)"><stop stop-color="#B8B8B8" stop-opacity="0.498" /><stop offset="1" stop-color="#7F7F7F" stop-opacity="0" /></radialGradient></defs>
                        </svg>
                        <p className='hidden md:block'>Python</p>
                    </div>
                    <div className='flex flex-col items-center mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="64" viewBox="0 0 43 64" fill="none"><g clip-path="url(#clip0_12_880)"><path d="M21.5454 32C21.5454 29.1711 22.6692 26.458 24.6696 24.4576C26.67 22.4572 29.3831 21.3334 32.2121 21.3334C35.0411 21.3334 37.7542 22.4572 39.7545 24.4576C41.7549 26.458 42.8787 29.1711 42.8787 32C42.8787 34.829 41.7549 37.5421 39.7545 39.5425C37.7542 41.5429 35.0411 42.6667 32.2121 42.6667C29.3831 42.6667 26.67 41.5429 24.6696 39.5425C22.6692 37.5421 21.5454 34.829 21.5454 32Z" fill="#1ABCFE"/><path d="M0.212036 53.3333C0.212036 50.5043 1.33584 47.7912 3.33623 45.7908C5.33662 43.7904 8.04973 42.6666 10.8787 42.6666H21.5454V53.3333C21.5454 56.1623 20.4216 58.8754 18.4212 60.8758C16.4208 62.8762 13.7077 64 10.8787 64C8.04973 64 5.33662 62.8762 3.33623 60.8758C1.33584 58.8754 0.212036 56.1623 0.212036 53.3333Z" fill="#0ACF83"/><path d="M21.5454 0V21.3333H32.2121C35.0411 21.3333 37.7542 20.2095 39.7545 18.2091C41.7549 16.2087 42.8787 13.4956 42.8787 10.6667C42.8787 7.83769 41.7549 5.12458 39.7545 3.12419C37.7542 1.12381 35.0411 0 32.2121 0L21.5454 0Z" fill="#FF7262"/><path d="M0.212036 10.6667C0.212036 13.4956 1.33584 16.2087 3.33623 18.2091C5.33662 20.2095 8.04973 21.3333 10.8787 21.3333H21.5454V0H10.8787C8.04973 0 5.33662 1.12381 3.33623 3.12419C1.33584 5.12458 0.212036 7.83769 0.212036 10.6667Z" fill="#F24E1E"/><path d="M0.212036 32C0.212036 34.829 1.33584 37.5421 3.33623 39.5425C5.33662 41.5429 8.04973 42.6667 10.8787 42.6667H21.5454V21.3334H10.8787C8.04973 21.3334 5.33662 22.4572 3.33623 24.4576C1.33584 26.458 0.212036 29.1711 0.212036 32Z" fill="#A259FF"/></g><defs><clipPath id="clip0_12_880"><rect width="42.6667" height="64" fill="white" transform="translate(0.212036)"/></clipPath></defs></svg>
                        <p className='hidden md:block'>Figma</p>
                    </div>
                    <div className='flex flex-col items-center mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                            <path d="M30.9346 50.3457C30.5465 50.2581 30.1691 50.1366 29.7904 50.0246L29.5049 49.9379C29.1354 49.8246 28.7679 49.7051 28.4024 49.5793L28.251 49.5245C27.9251 49.4094 27.601 49.2892 27.2788 49.164L27.006 49.0566C26.6535 48.9174 26.3029 48.7721 25.957 48.6202L25.7474 48.5274C25.4507 48.3934 25.1556 48.256 24.862 48.1154L24.606 47.9926C24.3759 47.8806 24.1481 47.7615 23.9212 47.6443C23.7693 47.5641 23.6146 47.4887 23.4641 47.4052C23.1879 47.2566 22.9143 47.1031 22.6434 46.9449L22.3663 46.7902C22.0065 46.5779 21.6502 46.3596 21.2976 46.1354L21.0093 45.9432C20.7529 45.7789 20.4993 45.6103 20.2485 45.4374L20.0034 45.2654C19.7619 45.0945 19.5222 44.9213 19.2843 44.7456L18.966 44.5046C18.7476 44.3384 18.5313 44.1693 18.3173 43.9974L18.0281 43.7654C17.7557 43.5419 17.4863 43.3149 17.2199 43.0843L17.1318 43.0098C16.8448 42.7567 16.5617 42.4993 16.2824 42.2377L16.0434 42.0076C15.8366 41.8107 15.6332 41.6124 15.4331 41.409L15.194 41.1704C14.9399 40.9104 14.6901 40.6463 14.4445 40.3782L14.4079 40.3388C14.1493 40.0555 13.8959 39.7673 13.6481 39.4745L13.4493 39.2382C13.2639 39.0154 13.0815 38.7901 12.9023 38.5623L12.7021 38.3129C12.4876 38.0356 12.2772 37.7553 12.0707 37.472C6.3754 29.7029 4.32883 18.9882 8.88133 10.1888L4.84493 15.3081C-0.324916 22.7382 0.318678 32.4062 4.2679 40.3018C4.36165 40.4912 4.46055 40.6773 4.55712 40.8634L4.74227 41.2191L4.85712 41.424L5.0629 41.7924C5.18571 42.0085 5.31134 42.2237 5.44024 42.4388L5.65493 42.7932C5.79743 43.0234 5.94321 43.2507 6.09274 43.4776L6.2793 43.7654C6.48462 44.0724 6.69555 44.379 6.91305 44.6799L6.93133 44.7034L7.03821 44.8477C7.22571 45.107 7.41977 45.3629 7.61571 45.616L7.83274 45.8926C8.00758 46.1124 8.18524 46.3309 8.36665 46.5484L8.57055 46.7921C8.81382 47.0792 9.06167 47.3623 9.31399 47.6415L9.32899 47.657L9.35805 47.6888C9.60593 47.9581 9.85783 48.2236 10.1137 48.4852L10.356 48.7295C10.5543 48.9291 10.7559 49.1256 10.9593 49.321L11.2059 49.5554C11.4777 49.8118 11.7524 50.0631 12.0327 50.3087L12.0459 50.319L12.1898 50.4418C12.4363 50.6556 12.6876 50.8679 12.9412 51.076L13.2524 51.324C13.4591 51.4899 13.6682 51.6531 13.8787 51.8134L14.2134 52.0679C14.4454 52.239 14.6798 52.4073 14.916 52.5718L15.172 52.7532L15.2423 52.8034C15.4663 52.9576 15.6956 53.1062 15.9248 53.2548L16.2201 53.4516C16.5712 53.6738 16.9279 53.8937 17.2879 54.106L17.5832 54.2724C17.8486 54.4258 18.1159 54.5756 18.3852 54.722C18.5315 54.8007 18.6815 54.8752 18.8287 54.9507C19.0195 55.0506 19.2088 55.1518 19.4029 55.2488L19.5356 55.3131L19.7704 55.4265C20.0709 55.5699 20.3737 55.711 20.6798 55.847L20.872 55.9332C21.2228 56.0867 21.5765 56.2338 21.9327 56.3743L22.191 56.476C22.521 56.6031 22.8557 56.7287 23.1918 56.8468L23.3174 56.8904C23.6859 57.0193 24.0585 57.1388 24.4335 57.2556L24.7031 57.3362C25.0846 57.451 25.4615 57.5884 25.8552 57.661C50.8579 62.2206 58.1207 42.6362 58.1207 42.6362C52.0204 50.5834 41.1932 52.6796 30.9346 50.3457ZM21.9281 30.0812C22.4882 30.8841 23.1093 31.8395 23.8523 32.4845C24.1241 32.7822 24.4039 33.0726 24.6913 33.3554L24.9126 33.5734C25.1919 33.8454 25.4776 34.1108 25.7695 34.3693L25.8041 34.3993L25.8126 34.4077C26.1392 34.6922 26.4729 34.9683 26.8134 35.236L27.0402 35.4132C27.3826 35.6769 27.7316 35.9319 28.087 36.1777L28.1174 36.2007C28.2749 36.3095 28.4357 36.4107 28.5956 36.5157L28.8215 36.6652C29.0765 36.8288 29.3352 36.9882 29.5977 37.141L29.7074 37.2048C29.9338 37.3351 30.1635 37.4635 30.3932 37.5882L30.6374 37.7152C30.7963 37.7982 30.9552 37.8831 31.1174 37.9637L31.1901 37.9965C31.5191 38.1587 31.8515 38.3152 32.1913 38.4629L32.4126 38.5538C32.6839 38.6699 32.9574 38.7809 33.2329 38.8866L33.5845 39.0156C33.8343 39.1084 34.0851 39.1927 34.3382 39.2776L34.679 39.3868C35.0385 39.4984 35.3938 39.6395 35.7684 39.7018C55.0729 42.9001 59.5293 28.0365 59.5293 28.0365C55.5121 33.8223 47.7318 36.5832 39.4298 34.4279C39.0628 34.3314 38.6981 34.226 38.3362 34.112L38.0081 34.0056C37.7514 33.9225 37.4964 33.8347 37.2431 33.7421L36.8981 33.6137C36.6219 33.5076 36.3475 33.3969 36.0749 33.2818L35.8532 33.1881C35.5138 33.0403 35.178 32.8842 34.8463 32.7198C34.6757 32.6368 34.5084 32.5491 34.341 32.4629L34.0495 32.3129C33.8344 32.1963 33.6214 32.076 33.4106 31.952L33.2577 31.8652C32.9968 31.713 32.7389 31.5554 32.4843 31.3927L32.2509 31.2371C32.0828 31.1283 31.9157 31.0178 31.7498 30.9057C31.396 30.6596 31.0481 30.4052 30.7063 30.1426L30.4715 29.9574C26.8377 27.0887 23.9573 23.1671 22.5876 18.721C21.1523 14.1104 21.4621 8.93446 23.9484 4.73352L20.8935 9.04602C17.1543 14.4263 17.3577 21.6291 20.2743 27.3193C20.7621 28.2765 21.3146 29.1992 21.9281 30.0812ZM42.2751 23.4254C42.434 23.484 42.5929 23.5365 42.7542 23.5913L42.9656 23.6584C43.1924 23.7296 43.4184 23.8126 43.6532 23.8571C54.3121 25.9168 57.2038 18.3873 57.9731 17.2787C55.4404 20.9251 51.1846 21.8002 45.9623 20.5327C45.5498 20.4329 45.096 20.2838 44.6985 20.1427C44.1879 19.9613 43.687 19.7534 43.1981 19.5198C42.2702 19.0732 41.389 18.5355 40.5674 17.9148C35.8945 14.3687 32.9915 7.60508 36.0407 2.0968L34.3907 4.37071C32.1866 7.61446 31.9701 11.6429 33.4996 15.2251C35.1126 19.0276 38.4177 22.0102 42.2751 23.4254Z" fill="#0868AC" />
                        </svg>
                        <p className='hidden md:block'>Jquery</p>
                    </div>
                </div>

            </div>

            <div  className='dark:text-white text-black flex flex-col gap-2 items-center md:mt-16 mt-20 md:absolute bottom-0 mb-6 left-0 right-0 '> 
                <div className='flex'>
                    <a className='transition-all hover:text-green-500 hover:translate-y-1 hover:scale-125' target='_blank' href='https://www.linkedin.com/in/lucas-almeida-52b64522b'><Linkedin size={35}/></a>
                    <a className='transition-all hover:text-green-500 hover:translate-y-1 hover:scale-125' target='_blank' href='https://github.com/LucaAlmeidaDev'><Github size={35}/></a>
                    <a className='transition-all hover:text-green-500 hover:translate-y-1 hover:scale-125' target='_blank' href='https://www.instagram.com/lucasalmeida86355/'><Instagram size={35}/></a>
                </div>
                <p className='select-none'>Lucas Almeida ©2024</p>
            </div>
        </div>
    );
};

export default Tecnologies;