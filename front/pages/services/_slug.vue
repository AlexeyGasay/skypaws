<template>
  <div
    class="slug"
    :style="{ background: page.bg }"
  >
    <div class="slug__pin">
      <div class="slug__wrapper">
        <the-services-hero
          :title="page.title"
          :texts="page.texts"
          :slug="slug"
          :accent="page.accent"
        />
        <h2 class="slug__title-2">
          Чему&nbsp;ребенок научится на&nbsp;нашем курсе?
        </h2>
        <the-services-list
          :accent="page.accent"
          :list="page.list"
        />

        <h2 class="slug__title-3">с&nbsp;нами весело и&nbsp;интересно!</h2>

        <the-services-slider
          class="slug__slider"
          :slides="page.slides"
          :accent="page.accent"
        />

        <the-services-discount
          class="slug__discount"
          :accent="page.accent"
        />

        <the-services-qr class="slug__qr" />
      </div>

      <div class="slug__decor">
        <svg
          v-if="slug === 'dev'"
          viewBox="0 0 1441 878"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 878V686.811"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M24.0527 872.742V713.577"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M47.1055 873.698V735.564"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M70.1582 873.22V725.048"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M93.2109 872.742V674.383"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M116.264 874.176V704.018"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M139.316 871.786V748.947"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M162.369 871.309V727.917"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M185.422 871.786V754.683"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M208.475 871.308V738.432"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M231.525 872.264V720.269"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M254.578 873.22V707.841"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M277.631 873.22V685.854"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M300.684 872.264V661"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M323.736 873.22V677.251"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M346.789 874.176V721.225"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M369.842 874.176V746.079"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M392.895 872.742V779.538"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M415.947 873.22V806.304"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M439 874.176V828.291"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M462.053 871.787V845.498"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M485.105 872.264V815.863"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M508.158 872.264V746.079"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M531.211 872.742V729.828"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M554.264 873.698V768.066"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M577.316 874.176V782.405"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M600.369 872.742V798.656"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M623.422 874.654V747.035"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M646.475 873.698V708.797"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M669.525 873.698V741.3"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M692.578 873.698V695.414"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M715.631 875.61V672.471"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M738.684 877.522V715.489"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M761.736 873.698V749.903"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M784.789 875.132V769.022"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M807.842 875.61V795.789"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M830.895 873.698V815.863"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M853.947 875.61V830.203"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M877 877.044V846.454"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M371 3.67798V39.9976"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M393 0V60.2262"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M415 0V93.7873"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M437 0V166.886"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M459 0.919434V201.827"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M481 0.919434V138.842"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M503 3.67798V109.419"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M525 2.75854V75.8575"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M547 4.59741V94.2471"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M569 2.75854V116.775"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M591 1.83887V148.956"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M613 1.83887V182.977"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M635 0V130.107"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M657 3.67798V107.12"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M679 4.59741V77.6964"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M701 3.67798V62.0652"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M723 1.83887V44.5949"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M745 1.83887V67.5819"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M767 0.919434V85.9717"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M789 1.83887V119.073"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M811 4.59741V134.245"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M833 5.51685V154.013"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M855 6.43628V113.096"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M877 5.51685V81.834"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M899 8.27539V55.1691"
            stroke="white"
            stroke-dasharray="10 5"
          />
        </svg>
        <svg
          v-if="slug === 'fpv'"
          viewBox="0 0 1440 860"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-7 667L73.323 654.439C100.302 650.22 127.916 653.15 153.41 662.935L162.8 666.539C195.275 679.004 221.503 703.806 235.762 735.534V735.534C247.285 761.171 266.704 782.452 291.182 796.266L299.058 800.711C334.651 820.798 376.603 826.436 416.236 816.458L465.773 803.987C486.856 798.68 507.268 790.994 526.616 781.08L552.642 767.743C582.453 752.467 615.47 744.5 648.967 744.5H655.047C699.65 744.5 742.893 759.861 777.5 788V788L868 865.5"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M-8 215L182.668 163.57C225.904 151.907 271.202 150.072 315.239 158.199L392.249 172.41L408.434 174.136C437.417 177.227 466.557 169.922 490.655 153.525L515.462 136.645C519.599 133.83 522.798 129.841 524.648 125.191L528.764 114.846C531.989 106.737 527.568 97.6068 519.207 95.109V95.109C512.598 93.135 505.5 95.9658 502.064 101.946L499.924 105.67C496.8 111.106 496.365 117.682 498.746 123.482L503.053 133.976C506.235 141.729 511.592 148.396 518.477 153.174L544.711 171.376C551.948 176.398 559.611 180.78 567.61 184.47L580.349 190.347C615.555 206.589 653.866 215 692.638 215V215C728.014 215 763.04 207.998 795.697 194.397L819.997 184.276C838.813 176.439 855.938 165.041 870.43 150.707V150.707C894.354 127.045 910.111 96.3723 915.413 63.1438L929 -22"
            stroke="white"
            stroke-linecap="round"
            stroke-dasharray="10 5"
          />
          <path
            d="M1303.5 885L1324.36 816.519C1330.23 797.234 1343.23 780.91 1360.71 770.865L1363.1 769.489C1386.24 756.196 1400.5 731.55 1400.5 704.869V704.869C1400.5 674.689 1418.7 647.489 1446.6 635.976L1463.5 629"
            stroke="white"
            stroke-linecap="round"
            stroke-dasharray="10 5"
          />
        </svg>
        <svg
          v-if="slug === 'design'"
          viewBox="0 0 1440 843"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M346.5 112.127V105.959C346.5 97.82 350.405 90.1749 357 85.4042C364.939 79.6609 375.477 79.0032 384.068 83.7149L386.955 85.2977C395.616 90.0475 401 99.1404 401 109.019C401 119.141 395.349 128.417 386.354 133.059L383.38 134.594C375.135 138.849 365.223 138.248 357.554 133.026C350.639 128.318 346.5 120.493 346.5 112.127Z"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M627.5 759.468V732.632C627.5 720.409 637.409 710.5 649.632 710.5C656.487 710.5 662.954 713.676 667.145 719.1L671.743 725.05C680.471 736.345 682.019 751.619 675.734 764.435L666.421 783.426C662.797 790.816 655.284 795.5 647.053 795.5H639.591C625.863 795.5 617.511 780.38 624.821 768.759C626.571 765.976 627.5 762.756 627.5 759.468Z"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M1454 150L1402.95 168.456C1393.9 171.727 1386.19 177.895 1381.01 186.002V186.002C1371.86 200.33 1371.86 218.67 1381.01 232.998L1385.27 239.668C1387.71 243.473 1391.19 246.487 1395.31 248.34V248.34C1403.64 252.089 1409 260.375 1409 269.511V274.71C1409 282.609 1406.01 290.215 1400.63 295.999L1399 297.75C1392.57 304.659 1389 313.746 1389 323.182V347.787C1389 357.886 1395.13 366.973 1404.5 370.75V370.75C1413.87 374.527 1420 383.614 1420 393.713V401.517C1420 414.5 1413.07 426.496 1401.82 432.982L1368.17 452.385C1357.26 458.676 1348.28 467.821 1342.17 478.837L1338.36 485.729C1335.17 491.482 1333.5 497.95 1333.5 504.526V512.851C1333.5 519.57 1336.6 525.913 1341.91 530.038V530.038C1347.87 534.676 1355.81 535.891 1362.89 533.249L1386.13 524.57C1388.03 523.862 1390.04 523.5 1392.06 523.5V523.5C1401.42 523.5 1409 531.085 1409 540.441V550.763C1409 555.188 1407.92 559.546 1405.86 563.461L1395.48 583.188C1391.22 591.274 1389 600.275 1389 609.413V609.413C1389 620.241 1392.12 630.839 1397.99 639.938L1402.57 647.032C1406.84 653.645 1412 659.634 1417.91 664.825L1454 696.5"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M99.5 705.5L96.3076 714.497C94.8915 718.488 95.8335 722.935 98.7458 726.009V726.009C101.395 728.806 105.29 730.055 109.072 729.319L111.105 728.924C117.091 727.76 121.781 723.095 122.977 717.115L123.679 713.605C124.206 710.97 123.7 708.233 122.265 705.961V705.961C119.989 702.357 115.756 700.493 111.561 701.246L99.5 703.413"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M-7.02261 204.558L6.7949 165.555C11.7564 151.55 23.6481 141.136 38.185 138.066L46.093 136.395C58.6251 133.748 71.4913 139.105 78.4417 149.864L78.8222 150.453C81.8025 155.066 83.3879 160.442 83.3879 165.934V165.934C83.3879 176.987 89.7715 187.045 99.7725 191.75L116.917 199.815C122.766 202.567 129.745 200.773 133.541 195.542V195.542C138.077 189.294 146.927 188.132 152.92 192.999L168.538 205.68C176.23 211.927 186.351 214.325 196.028 212.194L214.36 208.157C225.11 205.789 235.168 200.97 243.748 194.074L247.488 191.068C253.296 186.401 259.649 182.457 266.408 179.323L284.685 170.849C290.115 168.332 296.028 167.028 302.013 167.028V167.028C315.035 167.028 327.291 173.185 335.064 183.634L341.324 192.048L343.8 194.93C355.057 208.03 371.47 215.566 388.742 215.566H394.103C407.557 215.566 420.373 209.833 429.341 199.804V199.804C438.308 189.774 451.125 184.041 464.579 184.041H488.64H504.577C513.98 184.041 523.203 181.457 531.237 176.571L557.931 160.337C560.702 158.652 562.095 155.393 561.399 152.225V152.225C560.358 147.491 563.962 143.009 568.809 143.009H595.729C601.499 143.009 607.139 144.716 611.941 147.916L635.83 163.837C639.881 166.537 641.359 171.787 639.311 176.204V176.204C634.894 185.734 646.44 194.654 654.546 187.974L680.887 166.266C687.126 161.125 696.062 160.883 702.57 165.679L706.048 168.242C715.832 175.454 718.384 188.999 711.895 199.276L697.771 221.647C693.833 227.884 693.132 235.633 695.887 242.475V242.475C700.751 254.557 714.681 260.177 726.567 254.852L742.013 247.933C748.479 245.036 754.041 240.442 758.107 234.64L775.69 209.547C781.05 201.899 787.812 195.335 795.616 190.205L799.844 187.426C814.368 177.878 832.218 174.829 849.088 179.014L868.051 183.718C876.231 185.747 882.874 191.695 885.792 199.601V199.601C890.586 212.594 884.106 227.035 871.212 232.09L867.672 233.477C864.263 234.814 860.634 235.5 856.972 235.5H832.199H818.238C810.105 235.5 803.239 241.544 802.208 249.611V249.611C801.128 258.049 806.775 265.88 815.123 267.519L848.686 274.113L862.992 277.178C876.521 280.076 886.817 291.088 888.8 304.78V304.78C889.159 307.252 889.236 309.757 889.03 312.246L886.956 337.36C886.045 348.401 879.751 358.284 870.131 363.78L866.616 365.788C851.705 374.307 847.059 393.631 856.468 407.997L858.007 410.346C860.915 414.786 865.316 418.038 870.414 419.514L872.655 420.163C876.726 421.342 880.184 424.049 882.305 427.719V427.719C887.38 436.504 883.353 447.743 873.854 451.305L869.153 453.068C863.359 455.241 858.843 459.895 856.846 465.752L856.69 466.21C854.11 473.777 847.577 479.312 839.689 480.614L824.446 483.129C821.918 483.546 819.658 484.946 818.159 487.024V487.024C814.318 492.35 816.771 499.874 823.013 501.913L831.881 504.811C840.723 507.699 844.919 517.783 840.736 526.091V526.091C839.669 528.212 839.113 530.552 839.113 532.926V533.918C839.113 538.078 840.452 542.128 842.931 545.468L857.407 564.97C860.797 569.537 863.587 574.522 865.708 579.8L870.036 590.572C875.635 604.506 873.881 620.318 865.367 632.686V632.686C855.24 647.397 837.345 654.689 819.82 651.247L809.718 649.262C803.489 648.038 797.548 645.647 792.208 642.213L790.839 641.333C776.896 632.368 759.283 631.336 744.388 638.609V638.609C732.867 644.235 719.56 644.956 707.499 640.607L691.363 634.79C677.096 629.646 661.606 628.941 646.931 632.766L639.656 634.662C610.851 642.17 590.75 668.182 590.75 697.95V697.95V725.519C590.75 736.692 584.979 747.072 575.489 752.969V752.969C567.303 758.055 557.274 759.223 548.139 756.153L544.253 754.847C524.866 748.332 513.239 728.531 516.996 708.426L518.954 697.95L525.085 679.153C529.565 665.421 517.101 652.161 503.118 655.784V655.784C500.245 656.528 497.235 656.562 494.346 655.883L483.249 653.272C467.421 649.549 450.756 652.888 437.584 662.422V662.422L428.95 669.056C414.749 679.968 395.515 681.674 379.615 673.43V673.43L365.687 665.567C355.643 659.897 344.304 656.917 332.77 656.917V656.917C326.1 656.917 319.469 657.914 313.094 659.873L268.995 673.43L220.793 684.563C214.627 685.987 208.234 683.352 204.861 677.997V677.997C203.003 675.047 202.241 671.537 202.707 668.082L204.113 657.662C205.402 648.116 200.838 638.729 192.534 633.846V633.846C185.212 629.54 176.155 629.44 168.74 633.585L136.501 651.606C130.189 655.133 124.335 659.423 119.069 664.377L97.2253 684.93C88.5941 693.051 76.4424 696.258 64.9277 693.454L50.2805 689.887C43.18 688.158 38.1826 681.798 38.1826 674.49V674.49C38.1826 665.092 30.0513 657.759 20.7036 658.726L-15 662.422"
            stroke="white"
            stroke-dasharray="10 5"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import TheServicesHero from "../../components/The/TheServicesHero.vue";
import TheServicesList from "../../components/The/TheServicesList.vue";
import slugs from "../../data/slugs";

export default {
  components: {
    TheServicesHero,
    TheServicesList,
  },

  data: () => {
    return {
      page: null,
    };
  },

  async fetch() {
    this.page = slugs.find((el) => el.type === this.slug);
  },

  computed: {
    slug() {
      return this.$route.params.slug;
    },
  },

  async mounted() {
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(DrawSVGPlugin);
    gsap.set(".slug__decor svg path", {
      drawSVG: "0% 0%",
    });
    gsap.set([".slug__title-2", ".slug__title-3"], {
      opacity: 0,
      pointerEvents: "none",
      y: 60,
    });
    gsap.to(".slug__wrapper", {
      opacity: 1,
      duration: 0.5,
    });

    gsap.set(
      [".the-services-list", ".the-services-slider", ".the-services-qr"],
      {
        opacity: 0,
        y: "30vh",
        pointerEvents: "none",
      },
    );

    gsap.set(".the-services-list__kv", {
      left: "-50vw",
    });

    gsap.set(".the-services-discount", {
      opacity: 0,
      pointerEvents: "none",
    });

    gsap.set(".the-services-discount__kv", {
      x: "-50vw",
      scale: 0.5,
    });

    gsap.set(".the-services-discount__cloud", {
      x: "20vw",
    });

    const tlDecor = gsap.timeline({
      repeat: -1,
    });

    if (this.slug === "dev") {
      tlDecor.to(".slug__decor svg path", {
        drawSVG: "100% 0%",
        stagger: 0.04,
        duration: 0.1,
      });
      tlDecor.to(".slug__decor svg path", {
        drawSVG: "0% 0%",
        stagger: 0.04,
        duration: 0.1,
        reversed: true,
      });
    } else {
      tlDecor.to(".slug__decor svg path", {
        drawSVG: "100% 0%",
        duration: 2,
      });
      tlDecor.to(".slug__decor svg path", {
        drawSVG: "0% 0%",
        duration: 2,
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".slug__pin",
        start: "top top",
        end: "+=5000px",
        pin: true,
        scrub: 1,
      },
    });

    tl.to(".the-services-hero__info", {
      x: "-50vw",
      opacity: 0,
      duration: 10,
    });
    tl.to(
      ".the-services-hero__kv",
      {
        opacity: 0,
        pointerEvents: "none",
        duration: 10,
      },
      "<",
    );
    tl.to(".slug__title-2", {
      opacity: 1,
      y: 0,
      pointerEvents: "all",
      duration: 3,
    });
    tl.to(".slug__title-2", {
      opacity: 0,
      delay: 4,
      pointerEvents: "none",
      y: -60,
      duration: 3,
    });
    tl.to(".the-services-list", {
      opacity: 1,
      y: 0,
      duration: 5,
      pointerEvents: "all",
    });
    tl.to(
      ".the-services-list__kv",
      {
        opacity: 1,
        left: 0,
        duration: 5,
      },
      "<",
    );
    tl.to(".the-services-list", {
      opacity: 0,
      y: -100,
      duration: 5,
      pointerEvents: "none",
      delay: 4,
    });
    tl.to(".slug__title-3", {
      opacity: 1,
      y: 0,
      pointerEvents: "all",
      duration: 3,
    });
    tl.to(".slug__title-3", {
      opacity: 0,
      delay: 4,
      y: -60,
      pointerEvents: "none",
      duration: 3,
    });
    tl.to(
      ".the-services-slider",
      {
        pointerEvents: "all",
        duration: 1,
      },
      "<",
    );
    tl.to(".the-services-slider", {
      opacity: 1,
      y: 0,
      duration: 5,
    });
    tl.to(".the-services-slider", {
      opacity: 0,
      pointerEvents: "none",
      duration: 5,
      delay: 5,
    });
    tl.to(".the-services-discount", {
      opacity: 1,
      pointerEvents: "all",
      duration: 5,
    });
    tl.to(
      ".the-services-discount__kv",
      {
        x: 0,
        duration: 5,
        scale: 1,
      },
      "<",
    );
    tl.to(
      ".the-services-discount__cloud",
      {
        x: 0,
        duration: 5,
      },
      "<",
    );
    tl.to(".the-services-discount", {
      opacity: 0,
      y: "-30vh",
      duration: 5,
    });
    tl.to(".the-services-discount", {
      pointerEvents: "none",
      duration: 1,
    });
    tl.to(".the-services-qr", {
      opacity: 1,
      y: 0,
      pointerEvents: "all",
      duration: 5,
    });
  },
};
</script>

<style lang="less">
.slug {
  position: relative;
  z-index: 1;
  overflow: hidden;
  min-height: 100vh;

  &__pin {
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  &__wrapper {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;

    section {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 1;
    }
  }

  &__decor {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    pointer-events: none;

    svg {
      height: 850px;
      width: 100%;
      position: absolute;
      left: 0;
      top: calc(50% - 420px);
      z-index: 1;
    }
  }

  &__title-2,
  &__title-3 {
    color: @white;
    font-size: 64px;
    font-weight: 900;
    text-align: center;
    width: 920px;
    position: absolute;
    top: 42vh;
    z-index: 2;
    text-transform: uppercase;
  }

  &__title-3 {
    width: 100%;
    top: 47vh;
  }
}
</style>
