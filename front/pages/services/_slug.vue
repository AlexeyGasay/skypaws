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

        <the-services-qr
          class="slug__qr"
          :accent="page.accent"
        />
      </div>

      <div class="slug__decor">
        <svg
          v-if="slug === 'dev'"
          class="desktop"
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
          v-if="slug === 'dev'"
          class="tablet"
          viewBox="0 0 768 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1024.36V916.982"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M22.9473 1021.41V932.016"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M35.8945 1021.95V944.365"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M48.8418 1021.68V938.459"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M61.7891 1021.41V910.002"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M74.7363 1022.22V926.647"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M87.6836 1020.87V951.881"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M100.631 1020.6V940.069"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M113.578 1020.87V955.103"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M126.525 1020.6V945.975"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M139.475 1021.14V935.774"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M152.422 1021.68V928.795"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M165.369 1021.68V916.446"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M178.316 1021.14V902.486"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M191.264 1021.68V911.614"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M204.211 1022.22V936.311"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M217.158 1022.22V950.271"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M230.105 1021.41V969.062"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M243.053 1021.68V984.096"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M256 1022.22V996.444"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M268.947 1020.87V1006.11"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M281.895 1021.14V989.464"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M294.842 1021.14V950.271"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M307.789 1021.41V941.143"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M320.736 1021.95V962.619"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M333.684 1022.22V970.673"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M346.631 1021.41V979.8"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M359.578 1022.48V950.808"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M372.527 1021.95V929.331"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M385.475 1021.95V947.586"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M398.422 1021.95V921.815"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M411.369 1023.02V908.929"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M424.316 1024.09V933.09"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M437.264 1021.95V952.418"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M450.211 1022.75V963.156"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M463.158 1023.02V978.19"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M476.105 1021.95V989.464"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M489.053 1023.02V997.518"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M502 1023.83V1006.65"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M280.566 3.07861V27.1838"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M295.168 0.637695V40.6096"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M309.77 0.637695V62.8841"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M324.371 0.637695V111.4"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M338.973 1.24823V134.59"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M353.572 1.24823V92.787"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M368.174 3.07861V73.2584"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M382.775 2.46869V50.9843"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M397.377 3.68915V63.1894"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M411.979 2.46869V78.1408"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M426.58 1.85815V99.4995"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M441.182 1.85815V122.079"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M455.783 0.637695V86.9893"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M470.383 3.07861V71.7327"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M484.984 3.68915V52.2047"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M499.586 3.07861V41.83"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M514.188 1.85815V30.2352"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M528.789 1.85815V45.4916"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M543.391 1.24823V57.6972"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M557.992 1.85815V79.6661"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M572.594 3.68915V89.7356"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M587.195 4.29907V102.856"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M601.795 4.90961V75.6996"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M616.396 4.29907V54.9505"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M630.998 6.13007V37.2533"
            stroke="white"
            stroke-dasharray="10 5"
          />
        </svg>
        <svg
          v-if="slug === 'dev'"
          class="mobile"
          viewBox="0 0 353 666"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 666V614.018"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M7.26758 664.571V621.295"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M13.5352 664.831V627.273"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M19.8027 664.7V624.414"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M26.0703 664.57V610.638"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M32.3398 664.96V618.696"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M38.6055 664.31V630.912"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M44.873 664.181V625.194"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M51.1406 664.31V632.471"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M57.4102 664.181V628.053"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M63.6777 664.441V623.115"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M69.9453 664.7V619.736"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M76.2129 664.7V613.758"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M82.4805 664.44V607"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M88.748 664.7V611.418"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M95.0156 664.961V623.375"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M101.283 664.96V630.132"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M107.551 664.57V639.229"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M113.82 664.701V646.507"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M120.088 664.96V652.484"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M126.355 664.31V657.163"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M132.623 664.44V649.105"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M138.891 664.44V630.132"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M145.158 664.57V625.713"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M151.426 664.83V636.11"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M157.693 664.96V640.009"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M163.961 664.57V644.427"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M170.229 665.09V630.392"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M176.496 664.83V619.996"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M182.764 664.83V628.832"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M189.031 664.83V616.356"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M195.301 665.35V610.119"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M201.568 665.87V621.815"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M207.836 664.83V631.171"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M214.104 665.22V636.37"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M220.371 665.35V643.647"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M226.639 664.83V649.105"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M232.906 665.35V653.004"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M239.174 665.74V657.423"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M191.453 1.13086V12.288"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M198.211 0V18.5011"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M204.969 0V28.8108"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M211.727 0V51.2663"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M218.486 0.283203V62.0005"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M225.244 0.283203V42.652"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M232.002 1.13086V33.6136"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M238.762 0.847656V23.3031"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M245.518 1.41211V28.9518"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M252.277 0.847656V35.8726"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M259.035 0.565918V45.7593"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M265.793 0.565918V56.2103"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M272.553 0V39.9679"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M279.311 1.13086V32.9075"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M286.068 1.41211V23.8676"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M292.826 1.13086V19.067"
            stroke="white"
            stroke-dasharray="3 3"
          />
          <path
            d="M299.584 0.565918V13.7003"
            stroke="white"
            stroke-dasharray="3 3"
          />
        </svg>

        <svg
          v-if="slug === 'fpv'"
          class="desktop"
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
          v-if="slug === 'fpv'"
          class="tablet"
          preserveAspectRatio="none"
          viewBox="0 0 768 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-7.47266 915.691L34.886 909.067C49.1135 906.842 63.6757 908.387 77.1198 913.548L82.0719 915.448C99.1976 922.022 113.029 935.101 120.549 951.833V951.833C126.625 965.353 136.866 976.575 149.775 983.86L153.928 986.204C172.698 996.797 194.821 999.77 215.722 994.509L241.846 987.932C252.964 985.133 263.728 981.08 273.932 975.852L287.656 968.819C303.377 960.763 320.789 956.561 338.454 956.561H341.66C365.182 956.561 387.986 964.662 406.236 979.501V979.501L453.961 1020.37"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M-8 126.328L61.5073 107.579C104.743 95.917 150.041 94.0818 194.079 102.208L203.073 103.868L211.608 104.778C226.892 106.408 242.259 102.556 254.967 93.909L268.049 85.0073C270.231 83.5228 271.918 81.4191 272.894 78.9672L275.064 73.5113C276.765 69.2351 274.434 64.4204 270.024 63.1032V63.1032C266.539 62.0622 262.796 63.555 260.984 66.7085L259.855 68.6727C258.208 71.5395 257.979 75.0069 259.234 78.0657L261.505 83.5997C263.184 87.6884 266.008 91.2043 269.64 93.7239L283.474 103.323C287.291 105.971 291.331 108.282 295.55 110.228L302.268 113.327C320.834 121.892 341.037 126.328 361.484 126.328V126.328C380.139 126.328 398.61 122.635 415.832 115.463L428.647 110.126C438.57 105.993 447.6 99.9819 455.243 92.4231V92.4231C467.859 79.9448 476.169 63.7694 478.965 46.2463L486.13 1.3454"
            stroke="white"
            stroke-linecap="round"
            stroke-dasharray="10 5"
          />
          <path
            d="M683.623 1030.65L694.622 994.541C697.72 984.371 704.574 975.762 713.792 970.465L715.055 969.74C727.255 962.729 734.776 949.732 734.776 935.662V935.662C734.776 919.746 744.374 905.402 759.086 899.331L768 895.652"
            stroke="white"
            stroke-linecap="round"
            stroke-dasharray="10 5"
          />
        </svg>
        <svg
          v-if="slug === 'fpv'"
          class="mobile"
          viewBox="0 0 360 666"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.244141 617.562L19.8951 614.489C26.4955 613.457 33.2511 614.174 39.4881 616.568L41.7855 617.45C49.7304 620.499 56.147 626.567 59.6356 634.329V634.329C62.4545 640.601 67.2054 645.807 73.194 649.187L75.1206 650.274C83.8284 655.189 94.0919 656.568 103.788 654.127L115.907 651.076C121.065 649.778 126.059 647.897 130.793 645.472L137.16 642.209C144.453 638.472 152.53 636.523 160.725 636.523H162.213C173.125 636.523 183.704 640.281 192.171 647.165V647.165L214.311 666.125"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M0 95L32.5613 86.0896C58.8431 78.8976 86.4147 77.766 113.198 82.7801V82.7801L117.626 83.2593C125.913 84.1558 134.245 82.044 141.105 77.3089L148.022 72.5337C149.207 71.7159 150.12 70.5631 150.646 69.223L151.839 66.1803C152.736 63.892 151.491 61.3246 149.139 60.6118V60.6118C147.253 60.0403 145.224 60.8525 144.253 62.5669L143.628 63.6687C142.757 65.207 142.636 67.0588 143.299 68.6976L144.525 71.729C145.432 73.9692 146.965 75.9005 148.941 77.2916L156.291 82.466C158.355 83.9186 160.542 85.187 162.827 86.2567L166.436 87.9453C176.363 92.5917 187.19 95 198.151 95V95C208.154 95 218.056 92.994 227.271 89.1005L233.832 86.3283C239.378 83.9852 244.415 80.5871 248.665 76.3228V76.3228C255.298 69.6666 259.759 61.1561 261.458 51.9137L271 0"
            stroke="white"
            stroke-linecap="round"
            stroke-dasharray="10 5"
          />
          <path
            d="M320.856 670.896L325.959 654.142C327.396 649.424 330.576 645.43 334.852 642.973L335.438 642.636C341.098 639.384 344.587 633.354 344.587 626.827V626.827C344.587 619.443 349.04 612.789 355.865 609.972L360 608.266"
            stroke="white"
            stroke-linecap="round"
            stroke-dasharray="10 5"
          />
        </svg>

        <svg
          v-if="slug === 'design'"
          class="desktop"
          viewBox="0 0 1440 860"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1269.18 763.375L1257.76 756.242C1254.68 754.318 1252.81 750.943 1252.81 747.312C1252.81 744.409 1254.01 741.634 1256.13 739.644L1256.8 739.008C1258.8 737.13 1261.35 735.949 1264.07 735.642L1285.63 733.207L1300.09 731.565C1302.63 731.276 1305.13 730.711 1307.55 729.879L1312.65 728.126C1315.63 727.103 1318.25 725.255 1320.22 722.798C1322.57 719.855 1323.85 716.198 1323.85 712.428V709.593C1323.85 705.74 1322.84 701.955 1320.91 698.62C1319.83 696.761 1318.49 695.072 1316.92 693.604L1302.16 679.79C1300.56 678.291 1299.08 676.668 1297.74 674.936L1295.46 672.017C1292.56 668.282 1290.66 663.864 1289.95 659.186L1289.64 657.132C1289.19 654.16 1289.45 651.124 1290.4 648.273L1291.33 645.5C1291.95 643.638 1293.12 642.009 1294.69 640.831C1296.36 639.579 1298.4 638.901 1300.48 638.901H1304.09C1305.89 638.901 1307.68 639.246 1309.36 639.916C1311.78 640.883 1313.88 642.495 1315.44 644.577L1317.38 647.158C1318.64 648.848 1319.7 650.688 1320.52 652.637L1324.69 662.582L1329.64 678.321C1331.04 682.768 1332.97 687.031 1335.39 691.017L1337.43 694.391C1339.17 697.263 1341.34 699.851 1343.87 702.063C1347.91 705.6 1352.76 708.088 1357.99 709.309L1358.56 709.44C1361.17 710.05 1363.85 710.358 1366.53 710.358H1370.51C1372.36 710.358 1374.2 710.141 1376 709.713C1379.95 708.774 1383.58 706.839 1386.57 704.094L1387.37 703.355C1390.68 700.313 1393.2 696.519 1394.73 692.294L1395.55 690.002C1397.04 685.878 1397.8 681.527 1397.8 677.143V672.137L1397.68 670.465C1396.93 660.237 1395.45 650.076 1393.25 640.06L1389.69 623.862C1388.73 619.499 1388.25 615.045 1388.25 610.578V599.906C1388.25 595.79 1389.36 591.749 1391.45 588.208L1391.9 587.462C1393.85 584.158 1396.72 581.487 1400.16 579.77L1400.27 579.714C1403.8 577.946 1407.79 577.289 1411.71 577.829C1415.64 578.371 1419.31 580.094 1422.24 582.77L1423.05 583.508C1425.84 586.054 1427.96 589.246 1429.24 592.803L1429.75 594.245C1430.88 597.404 1431.45 600.733 1431.45 604.088V610.797C1431.45 616.493 1430.74 622.167 1429.32 627.685L1427.3 635.578L1424.33 643.972C1419.98 656.262 1418.05 669.278 1418.65 682.301L1419.03 690.42C1419.28 695.921 1420.42 701.344 1422.4 706.48L1423.43 709.144C1425.43 714.322 1428.54 719.001 1432.54 722.854C1436.21 726.397 1440.56 729.166 1445.32 730.998L1447.57 731.862C1452.03 733.58 1456.73 734.605 1461.51 734.904L1465.83 735.174C1475.48 735.777 1484.97 732.534 1492.23 726.155C1493.81 724.766 1495.27 723.243 1496.58 721.603L1508.2 707.159C1510.48 704.323 1513.18 701.862 1516.22 699.865L1519.28 697.858C1523.75 694.919 1529.07 693.547 1534.41 693.958L1535.4 694.034C1539.93 694.383 1544.23 696.181 1547.66 699.164C1550.46 701.598 1552.57 704.726 1553.78 708.233L1554.58 710.568C1555.57 713.415 1555.71 716.484 1555.01 719.412C1554.1 723.212 1551.81 726.539 1548.59 728.752L1544.22 731.757C1541.63 733.543 1538.76 734.903 1535.73 735.786L1526.72 738.415C1522.49 739.65 1518.35 741.201 1514.35 743.056L1508.43 745.799C1505.04 747.37 1501.83 749.309 1498.86 751.579L1496.83 753.13C1491.81 756.967 1487.77 761.925 1485.01 767.608C1483.38 770.969 1482.23 774.541 1481.58 778.22L1481.02 781.347C1480.38 784.975 1480.06 788.652 1480.06 792.336V802.171L1480.22 803.777C1480.67 808.226 1481.71 812.594 1483.31 816.767L1483.91 818.336C1486.03 823.839 1489.28 828.837 1493.45 833.006C1495.6 835.154 1497.97 837.064 1500.53 838.701L1501.62 839.398C1505.24 841.714 1509.12 843.591 1513.18 844.987L1515.36 845.737C1518.69 846.881 1522.09 847.783 1525.55 848.438L1559.83 854.933L1569.18 858.051C1572.87 859.279 1576.21 861.347 1578.96 864.093L1579.68 864.813C1581.66 866.79 1583.2 869.157 1584.21 871.763C1585.12 874.094 1585.58 876.572 1585.58 879.073V884.161C1585.58 887.069 1584.91 889.938 1583.61 892.539L1583.33 893.103C1581.82 896.113 1579.44 898.598 1576.5 900.232C1574.54 901.318 1572.39 902.001 1570.17 902.239L1567.85 902.487C1563.93 902.907 1559.97 902.501 1556.21 901.295L1555.37 901.024C1551.99 899.939 1548.82 898.306 1545.97 896.191L1535.73 888.584L1523.11 879.182C1518.52 875.765 1513.59 872.831 1508.4 870.426C1502.27 867.585 1495.82 865.502 1489.19 864.223L1481.8 862.797C1477.6 861.987 1473.34 861.58 1469.07 861.58H1457.47C1451.62 861.58 1445.9 863.33 1441.05 866.607C1435.89 870.089 1431.98 875.12 1429.87 880.973L1428.08 885.957C1426.46 890.45 1425.56 895.169 1425.41 899.942L1425.19 906.717C1424.94 914.763 1426.32 922.776 1429.25 930.272L1429.89 931.911C1431.48 935.965 1433.62 939.778 1436.26 943.241L1437.35 944.67C1438.4 946.051 1439.32 947.527 1440.1 949.08L1440.27 949.424C1442.39 953.654 1443.33 958.374 1442.99 963.091L1442.89 964.49C1442.75 966.495 1442.27 968.461 1441.48 970.309C1439.83 974.145 1436.91 977.293 1433.2 979.214L1432.47 979.592C1429.38 981.194 1425.86 981.769 1422.42 981.231C1417.38 980.444 1413 977.349 1410.57 972.862L1410.12 972.039C1409.39 970.692 1408.83 969.259 1408.46 967.773L1406.94 961.702C1405.84 957.282 1405.18 952.761 1404.98 948.21L1404.8 943.926C1404.57 938.612 1403.95 933.321 1402.96 928.096L1400.85 917.049C1399.93 912.213 1398.47 907.494 1396.5 902.983L1393.87 896.987C1391.81 892.271 1388.75 888.055 1384.91 884.627L1383.99 883.798C1380.77 880.929 1376.98 878.783 1372.87 877.506C1369.03 876.317 1365 875.906 1361.01 876.298L1355.11 876.877C1349.03 877.472 1343.17 879.45 1337.98 882.659C1333.86 885.203 1330.24 888.473 1327.28 892.31L1324.99 895.297C1321.21 900.209 1318.2 905.671 1316.08 911.493L1306.41 938.021L1296.85 967.518L1292.16 977.681C1290.31 981.684 1287.87 985.385 1284.91 988.656L1283.5 990.218C1279.72 994.41 1274.98 997.626 1269.68 999.593L1268.08 1000.19C1264.86 1001.38 1261.43 1001.94 1257.99 1001.83L1256.58 1001.78C1252.75 1001.65 1249.04 1000.5 1245.81 998.433L1245.57 998.275C1242.17 996.099 1239.49 992.961 1237.88 989.259C1236.77 986.702 1236.2 983.943 1236.2 981.155V976.76C1236.2 973.108 1236.68 969.471 1237.63 965.944L1237.84 965.167C1239.5 959.041 1242.36 953.31 1246.27 948.309L1247.52 946.707C1249.66 943.969 1252.04 941.43 1254.64 939.121L1261.95 932.621L1280.65 918.08L1289.08 910.524C1291.49 908.364 1293.71 906.009 1295.73 903.483L1295.97 903.187C1299.31 899.012 1302.04 894.381 1304.06 889.435L1304.37 888.69C1306.54 883.394 1307.81 877.772 1308.13 872.056L1308.26 869.666C1308.41 867.054 1308.23 864.435 1307.74 861.867L1307.37 859.92C1306.73 856.635 1305.39 853.527 1303.43 850.815C1301.83 848.593 1299.84 846.676 1297.56 845.155L1297.13 844.872C1294.75 843.281 1292.11 842.1 1289.34 841.376L1288.11 841.056C1285.36 840.339 1282.53 839.977 1279.7 839.977H1278.25C1274.6 839.977 1270.97 840.424 1267.43 841.309L1264.16 842.126C1259.93 843.183 1255.8 844.623 1251.83 846.428L1244.09 849.947L1228.11 856.273C1225.48 857.312 1222.71 857.93 1219.9 858.106L1216.05 858.347C1212.68 858.557 1209.33 857.656 1206.52 855.781L1204.91 854.711C1201.62 852.514 1199.64 848.814 1199.64 844.852C1199.64 842.23 1200.51 839.682 1202.11 837.607L1202.86 836.64C1205.32 833.452 1208.93 831.354 1212.92 830.794L1230.38 828.344L1257.05 825.01C1263.54 824.199 1269.73 821.796 1275.07 818.015L1278.84 815.342C1284.03 811.665 1287.76 806.274 1289.37 800.119L1289.85 798.253C1291.15 793.272 1290.64 787.992 1288.42 783.351C1287.4 781.233 1286.05 779.293 1284.41 777.608L1275.7 768.639C1273.74 766.628 1271.55 764.861 1269.18 763.375Z"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M1163.05 725.254L1162.94 725.051C1161.67 722.494 1161 719.674 1161 716.814V716.067C1161 714.49 1161.27 712.924 1161.79 711.435C1163.13 707.587 1166.09 704.516 1169.88 703.022L1173.15 701.733C1176.09 700.575 1179.25 700.073 1182.41 700.262L1187.78 700.584C1194.76 701.003 1201.56 703.007 1207.65 706.443L1211.47 708.602C1213.55 709.771 1215.48 711.166 1217.25 712.763L1220.8 715.982C1222.45 717.473 1223.7 719.353 1224.44 721.451L1224.9 722.773C1225.75 725.203 1225.62 727.869 1224.53 730.202C1223.74 731.895 1222.48 733.33 1220.91 734.337L1217.67 736.406C1214.56 738.401 1211.01 739.617 1207.32 739.952L1202.07 740.429C1197.16 740.876 1192.21 740.506 1187.41 739.334L1179.98 737.518C1177.31 736.866 1174.76 735.815 1172.4 734.401L1170.41 733.206C1167.25 731.309 1164.69 728.551 1163.05 725.254Z"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M529.511 133.861L529.742 133.029C530.552 130.112 532.407 127.595 534.954 125.958C536.943 124.68 539.257 124 541.621 124H543.035C546.898 124 550.648 125.305 553.677 127.702L554.854 128.634C558.767 131.732 561.183 136.343 561.505 141.323L561.551 142.035C561.837 146.476 560.261 150.836 557.2 154.067L556.739 154.554C554.331 157.095 551.071 158.661 547.583 158.951C543.408 159.299 539.292 157.792 536.329 154.829L535.093 153.593C532.743 151.243 531.09 148.29 530.314 145.059L529.381 141.172C528.803 138.764 528.848 136.248 529.511 133.861Z"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M499 0L500.32 3.69603C501.082 5.82988 502.573 7.62606 504.53 8.76776V8.76776C506.451 9.88787 508.7 10.3081 510.895 9.95685L515.478 9.22359C518.462 8.74605 521.321 7.67459 523.884 6.07262L532 1L539.01 -3.79613C540.514 -4.82564 542.494 -4.83756 544.011 -3.82626V-3.82626C545.253 -2.99769 546 -1.60278 546 -0.109053V0.217351C546 0.736054 545.921 1.25169 545.764 1.74632L544.716 5.06509C543.584 8.65069 541.732 11.9677 539.275 14.8135L537.471 16.9022C534.838 19.9508 531.771 22.5952 528.368 24.7505L524.48 27.2128C520.514 29.7247 516.927 32.7904 513.828 36.317L511.726 38.7083C506.688 44.4415 503.455 51.535 502.433 59.0987L502.127 61.3576C501.712 64.4279 501.848 67.5477 502.528 70.5703L502.821 71.8729C504.775 80.5545 511.396 87.4283 519.998 89.7054V89.7054C521.991 90.2329 524.044 90.5 526.105 90.5H542.771C545.871 90.5 548.918 91.3015 551.617 92.8268V92.8268C556.292 95.4693 559.541 100.064 560.474 105.352L561.339 110.254C561.778 112.74 562.545 115.158 563.62 117.442L564.157 118.585C567.933 126.608 574.396 133.058 582.427 136.817L584.542 137.807C590.442 140.569 596.876 142 603.39 142H609.384C619.019 142 628.544 139.96 637.333 136.014V136.014C644.719 132.698 651.455 128.094 657.228 122.418L674.559 105.375C677.162 102.816 680.235 100.785 683.61 99.3957V99.3957C691.164 96.2854 699.694 96.5971 707.001 100.25L723.5 108.5L742.328 120.846C749.989 125.87 758.778 128.912 767.906 129.699L775.631 130.365C780.455 130.781 785.302 129.892 789.665 127.791V127.791C794.135 125.639 797.926 122.296 800.621 118.131L804.754 111.744C806.558 108.956 807.664 105.774 807.979 102.468V102.468C808.32 98.8848 807.721 95.2745 806.239 91.9939L801.5 81.5L797.357 67.4149C796.794 65.5013 796.713 63.4783 797.12 61.5255V61.5255C798.231 56.1927 802.764 52.2571 808.2 51.9064L809.846 51.8002C812.87 51.6051 815.878 52.3768 818.434 54.0036L825.5 58.5L840.018 70.8834C841.67 72.2917 843.442 73.552 845.314 74.6495L851.598 78.3332C855.086 80.3779 859.186 81.1198 863.169 80.4271L864.224 80.2436C867.007 79.7597 869.572 78.4283 871.569 76.4314V76.4314C875.209 72.7909 876.503 67.4175 874.918 62.5191L873.433 57.9308C872.489 55.0105 870.932 52.3253 868.867 50.0542L863.074 43.6817C859.05 39.2548 854.354 35.4881 849.16 32.5198L842.874 28.9279C838.369 26.3539 833.271 25 828.083 25H820.153C816.562 25 813.147 23.4441 810.791 20.7344V20.7344C807.086 16.4734 806.774 10.1766 809.962 5.51646V5.51646C810.644 4.51975 811.476 3.61323 812.413 2.85167L819 -2.5"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M681.221 143.518L685.708 138.503C686.85 137.226 687.408 135.53 687.245 133.824C686.866 129.848 690.323 126.573 694.273 127.166L694.963 127.269C695.974 127.421 696.937 127.803 697.778 128.385L702.096 131.374C706.921 134.714 710.631 139.426 712.745 144.9L714.791 150.194C716.912 155.684 718 161.519 718 167.404V176.942C718 178.627 717.628 180.29 716.911 181.815C715.118 185.624 711.378 188.142 707.174 188.369L701.73 188.663C697.668 188.883 693.632 187.893 690.133 185.819L687.731 184.396C683.971 182.168 680.834 179.027 678.611 175.264C676.565 171.802 675.351 167.912 675.064 163.901L674.984 162.779C674.666 158.329 675.458 153.87 677.289 149.802L677.633 149.037C678.539 147.024 679.749 145.163 681.221 143.518Z"
            stroke="white"
            stroke-dasharray="10 5"
          />
        </svg>

        <svg
          v-if="slug === 'design'"
          class="tablet"
          viewBox="0 0 768 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M446.906 18.5602L441.769 15.5375C440.494 14.7876 439.712 13.4194 439.712 11.9407C439.712 10.7463 440.224 9.60924 441.118 8.81717L441.512 8.46731C442.345 7.72973 443.387 7.27015 444.493 7.1526L454.026 6.13924L460.379 5.45956C461.456 5.34438 462.518 5.1183 463.548 4.78491L465.94 4.01085C467.154 3.618 468.234 2.89493 469.06 1.92265C470.116 0.680336 470.696 -0.896828 470.696 -2.52709V-3.48357C470.696 -5.1107 470.244 -6.70596 469.392 -8.09199C468.935 -8.83535 468.37 -9.50655 467.715 -10.0836L461.197 -15.8285C460.524 -16.4212 459.9 -17.066 459.329 -17.757L458.255 -19.0576C457.028 -20.542 456.22 -22.3269 455.914 -24.2279L455.783 -25.0444C455.581 -26.2973 455.698 -27.5808 456.121 -28.777L456.481 -29.7924C456.77 -30.6092 457.305 -31.3163 458.013 -31.8161C458.72 -32.3152 459.564 -32.5831 460.429 -32.5831H462.112C462.876 -32.5831 463.633 -32.4452 464.348 -32.176C465.419 -31.7726 466.361 -31.0869 467.075 -30.1916L467.843 -29.2269C468.414 -28.5105 468.891 -27.7245 469.264 -26.8878L471.058 -22.8599L473.193 -16.475C473.821 -14.5979 474.68 -12.8065 475.752 -11.1423L476.563 -9.88198C477.358 -8.64757 478.339 -7.54396 479.472 -6.61053C481.206 -5.18188 483.255 -4.18552 485.45 -3.70342L485.858 -3.6137C486.98 -3.36718 488.126 -3.24282 489.275 -3.24282H491.067C491.858 -3.24282 492.647 -3.33018 493.42 -3.50332C495.154 -3.8922 496.766 -4.70498 498.11 -5.86899L498.333 -6.0627C499.816 -7.34717 500.96 -8.97747 501.662 -10.8093L501.946 -11.5493C502.608 -13.2752 502.948 -15.108 502.948 -16.9564V-18.9365L502.895 -19.6108C502.568 -23.8178 501.922 -27.9939 500.963 -32.1031L499.411 -38.752C498.992 -40.547 498.78 -42.3842 498.78 -44.2275V-48.474C498.78 -50.2398 499.279 -51.9696 500.22 -53.4639L500.293 -53.5792C501.198 -55.0179 502.497 -56.1672 504.035 -56.8912C505.573 -57.6152 507.295 -57.8826 508.981 -57.6637C510.713 -57.4387 512.351 -56.7109 513.676 -55.5719L513.896 -55.3824C515.154 -54.3016 516.12 -52.9233 516.708 -51.3731L516.865 -50.9595C517.367 -49.6369 517.624 -48.2342 517.624 -46.8196V-44.1265C517.624 -41.7863 517.313 -39.4565 516.698 -37.1985L515.812 -33.9478L514.5 -30.4574C512.617 -25.4455 511.78 -20.1009 512.041 -14.7532L512.199 -11.5223C512.312 -9.20389 512.82 -6.92181 513.701 -4.77443L514.062 -3.89638C514.976 -1.66917 516.375 0.326176 518.157 1.94438C519.72 3.36261 521.544 4.46182 523.528 5.18019L524.644 5.5845C526.598 6.29178 528.643 6.71297 530.717 6.83499L532.837 6.95972C536.917 7.19983 540.937 5.88455 544.087 3.27886C544.804 2.68501 545.47 2.0302 546.074 1.32175L551.018 -4.46754C552.062 -5.69064 553.29 -6.74412 554.658 -7.59031L555.891 -8.35273C557.87 -9.57743 560.186 -10.1462 562.507 -9.97808L563.118 -9.93383C564.995 -9.79793 566.794 -9.07689 568.25 -7.88504C569.501 -6.86079 570.463 -5.51239 571.019 -3.99411L571.313 -3.19104C571.749 -2.00247 571.814 -0.710022 571.502 0.516537C571.111 2.04764 570.158 3.37509 568.831 4.23365L566.736 5.58986C565.649 6.29311 564.461 6.82539 563.213 7.1681L559.16 8.28106C557.322 8.7858 555.522 9.42177 553.775 10.184L551.111 11.3463C549.688 11.9671 548.335 12.7377 547.075 13.6449L546.004 14.4159C543.904 15.9274 542.192 17.9144 541.008 20.2144C540.28 21.627 539.762 23.138 539.469 24.6998L539.246 25.8905C538.965 27.3899 538.824 28.9122 538.824 30.4377V34.456L538.886 35.043C539.085 36.9167 539.548 38.753 540.26 40.4973L540.453 40.9696C541.409 43.3096 542.856 45.4171 544.697 47.1497C545.61 48.01 546.613 48.7705 547.688 49.4182L548.252 49.7578C549.813 50.6983 551.477 51.4565 553.21 52.0176L556.399 53.0496L573.612 56.1201L577.807 57.4364C579.339 57.9173 580.743 58.739 581.912 59.8399L582.32 60.2235C583.149 61.0043 583.803 61.9527 584.238 63.0055C584.639 63.9781 584.846 65.0202 584.846 66.0725V68.0433C584.846 69.287 584.541 70.5117 583.958 71.6101L583.917 71.6876C583.224 72.9921 582.153 74.0565 580.844 74.741C580.017 75.1737 579.114 75.4441 578.186 75.5378L577.099 75.6475C575.395 75.8193 573.675 75.6525 572.036 75.1566L571.698 75.0542C570.205 74.6026 568.794 73.9172 567.516 73.0236L563.103 69.9373L557.661 66.1217C555.617 64.6888 553.435 63.4641 551.147 62.4659C548.497 61.3098 545.722 60.4648 542.877 59.948L539.569 59.347C537.747 59.016 535.899 58.8494 534.047 58.8494H528.772C526.343 58.8494 523.965 59.5418 521.915 60.8455C519.599 62.3186 517.82 64.4983 516.839 67.0618L516.183 68.7787C515.458 70.6752 515.053 72.6789 514.984 74.7082L514.897 77.2867C514.784 80.6496 515.394 83.9978 516.685 87.1049L516.926 87.6859C517.63 89.3777 518.572 90.9598 519.724 92.384L520.218 92.9944C520.662 93.5428 521.052 94.1327 521.383 94.7558L521.486 94.949C522.396 96.6623 522.801 98.5986 522.654 100.533L522.615 101.05C522.55 101.909 522.334 102.749 521.977 103.533C521.271 105.083 520.049 106.339 518.519 107.086L518.046 107.317C516.709 107.969 515.206 108.203 513.734 107.986C511.499 107.657 509.538 106.323 508.412 104.365L508.344 104.248C508.009 103.666 507.753 103.043 507.58 102.394L506.94 99.9812C506.454 98.1527 506.165 96.2776 506.078 94.3878L505.998 92.6628C505.897 90.48 505.629 88.3082 505.196 86.1665L504.295 81.7132C503.881 79.6695 503.229 77.6818 502.35 75.791L501.301 73.5344C500.357 71.5022 498.979 69.7018 497.263 68.2599L496.994 68.0336C495.543 66.8142 493.855 65.91 492.036 65.3786C490.387 64.8967 488.661 64.7303 486.95 64.8883L484.194 65.1427C481.628 65.3795 479.145 66.1732 476.917 67.4685C475.08 68.537 473.449 69.9277 472.104 71.5738L471.242 72.6297C469.56 74.6884 468.213 77 467.253 79.479L463.086 90.2367L458.918 102.348L456.928 106.407C456.086 108.126 454.982 109.704 453.657 111.085L453.2 111.561C451.48 113.354 449.361 114.716 447.015 115.537L446.377 115.76C444.966 116.253 443.475 116.482 441.981 116.436L441.235 116.412C439.643 116.362 438.089 115.904 436.724 115.082L436.434 114.907C435.028 114.059 433.908 112.81 433.22 111.32C432.722 110.242 432.464 109.068 432.464 107.881V106.147C432.464 104.645 432.675 103.151 433.089 101.707L433.192 101.348C433.907 98.8575 435.131 96.5424 436.785 94.5485L437.435 93.7648C438.347 92.6659 439.357 91.6521 440.452 90.7357L443.698 88.0191L451.852 82.0487L455.569 78.9109C456.592 78.0475 457.542 77.1009 458.409 76.0809L458.598 75.8585C460.012 74.1945 461.173 72.3318 462.046 70.33L462.214 69.9441C463.15 67.7957 463.7 65.499 463.838 63.1595L463.895 62.193C463.959 61.1058 463.881 60.0149 463.663 58.9479L463.521 58.2494C463.234 56.8482 462.633 55.5305 461.763 54.3958C461.08 53.5055 460.244 52.7442 459.293 52.1477L459.01 51.9701C457.989 51.3292 456.872 50.856 455.701 50.5685L455.088 50.4179C453.901 50.1264 452.684 49.9791 451.461 49.9791H450.805C449.213 49.9791 447.627 50.1633 446.077 50.5279L444.677 50.8575C442.82 51.2946 441.004 51.8918 439.25 52.6423L435.907 54.0731L428.948 56.6665C427.796 57.0959 426.586 57.3509 425.358 57.4231L423.525 57.531C422.15 57.6119 420.785 57.262 419.619 56.53L418.713 55.9613C417.348 55.1048 416.52 53.6068 416.52 51.9957C416.52 50.9124 416.895 49.8626 417.582 49.0252L417.984 48.5361C419.022 47.2712 420.502 46.4482 422.125 46.2338L429.928 45.2028L441.802 43.8054C444.478 43.4905 447.041 42.5471 449.283 41.0524L451.258 39.7353C453.394 38.3105 454.947 36.1648 455.633 33.6901L455.849 32.9111C456.425 30.8326 456.201 28.6139 455.221 26.6925C454.79 25.8467 454.222 25.078 453.54 24.4173L449.662 20.6586C448.83 19.8522 447.905 19.1478 446.906 18.5602Z"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M400.586 2.92122L400.505 2.76865C399.956 1.73468 399.669 0.581803 399.669 -0.588938V-0.850851C399.669 -1.52917 399.79 -2.20205 400.026 -2.83785C400.605 -4.39354 401.832 -5.62004 403.388 -6.19718L405.046 -6.81193C406.28 -7.26953 407.595 -7.46743 408.909 -7.39321L411.335 -7.25617C414.393 -7.08344 417.377 -6.25008 420.082 -4.81348L421.739 -3.93351C422.605 -3.47331 423.419 -2.92022 424.166 -2.28399L425.806 -0.887111C426.489 -0.305449 427.012 0.441334 427.324 1.28213L427.522 1.814C427.901 2.83346 427.842 3.9642 427.359 4.93867C427.025 5.61237 426.505 6.17652 425.861 6.56457L424.326 7.48993C423.005 8.2858 421.519 8.76804 419.982 8.89955L417.56 9.1069C415.43 9.28918 413.285 9.13789 411.202 8.65851L407.874 7.89263C406.758 7.63594 405.686 7.2197 404.689 6.65676L403.659 6.07487C402.355 5.33824 401.289 4.24399 400.586 2.92122Z"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M540.156 100.445L540.636 99.7881C541.823 98.5588 543.313 97.6639 544.955 97.1932L545.005 97.1789C546.071 96.8735 547.18 96.7489 548.287 96.8102L549.364 96.8698C551.557 96.9913 553.623 97.9367 555.149 99.5168C555.974 100.371 556.615 101.385 557.034 102.496L557.218 102.984C557.981 105.009 558.083 107.224 557.509 109.31L557.472 109.444C557.241 110.281 556.894 111.081 556.44 111.821C555.14 113.944 553.038 115.453 550.611 116.007L550.53 116.025C549.146 116.341 547.708 116.341 546.324 116.025L545.952 115.94C543.684 115.423 541.658 114.149 540.208 112.329L540.063 112.147C539.482 111.418 539.021 110.602 538.696 109.728C538.185 108.354 538.026 106.875 538.231 105.424L538.283 105.058C538.519 103.39 539.163 101.806 540.156 100.445Z"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M694.394 610.95L689.257 613.972C687.983 614.722 687.2 616.091 687.2 617.569C687.2 618.764 687.712 619.901 688.606 620.693L689.001 621.043C689.833 621.78 690.875 622.24 691.981 622.357L701.514 623.371L707.868 624.05C708.944 624.166 710.006 624.392 711.036 624.725L713.428 625.499C714.642 625.892 715.723 626.615 716.549 627.587C717.604 628.83 718.184 630.407 718.184 632.037V632.994C718.184 634.621 717.733 636.216 716.88 637.602C716.423 638.345 715.858 639.017 715.203 639.594L708.685 645.339C708.013 645.931 707.388 646.576 706.817 647.267L705.743 648.568C704.516 650.052 703.709 651.837 703.403 653.738L703.271 654.554C703.07 655.807 703.186 657.091 703.609 658.287L703.969 659.302C704.258 660.119 704.794 660.826 705.501 661.326C706.208 661.825 707.052 662.093 707.918 662.093H709.6C710.364 662.093 711.121 661.955 711.836 661.686C712.907 661.283 713.85 660.597 714.563 659.702L715.331 658.737C715.902 658.021 716.38 657.235 716.752 656.398L718.546 652.37L720.681 645.985C721.309 644.108 722.169 642.317 723.24 640.652L724.051 639.392C724.846 638.158 725.827 637.054 726.96 636.121C728.695 634.692 730.743 633.696 732.938 633.213L733.346 633.124C734.469 632.877 735.614 632.753 736.763 632.753H738.555C739.346 632.753 740.135 632.84 740.908 633.013C742.643 633.402 744.254 634.215 745.598 635.379L745.822 635.573C747.305 636.857 748.448 638.487 749.151 640.319L749.435 641.059C750.097 642.785 750.436 644.618 750.436 646.466V648.446L750.384 649.121C750.057 653.328 749.411 657.504 748.451 661.613L746.899 668.262C746.48 670.057 746.269 671.894 746.269 673.737V677.984C746.269 679.75 746.768 681.48 747.708 682.974L747.781 683.089C748.686 684.528 749.985 685.677 751.523 686.401C753.061 687.125 754.783 687.393 756.469 687.174C758.202 686.949 759.839 686.221 761.164 685.082L761.385 684.892C762.642 683.812 763.609 682.433 764.197 680.883L764.354 680.469C764.855 679.147 765.113 677.744 765.113 676.33V673.637C765.113 671.296 764.801 668.966 764.186 666.708L763.301 663.458L761.989 659.967C760.105 654.956 759.268 649.611 759.529 644.263L759.687 641.032C759.8 638.714 760.308 636.432 761.19 634.284L761.55 633.406C762.464 631.179 763.863 629.184 765.646 627.566C767.208 626.147 769.032 625.048 771.016 624.33L772.133 623.926C774.086 623.218 776.131 622.797 778.205 622.675L780.325 622.55C784.405 622.31 788.425 623.625 791.575 626.231C792.293 626.825 792.958 627.48 793.563 628.188L798.506 633.978C799.551 635.201 800.779 636.254 802.147 637.1L803.379 637.863C805.358 639.087 807.674 639.656 809.996 639.488L810.607 639.444C812.483 639.308 814.282 638.587 815.738 637.395C816.989 636.371 817.951 635.022 818.507 633.504L818.802 632.701C819.237 631.512 819.303 630.22 818.99 628.993C818.6 627.462 817.646 626.135 816.319 625.276L814.224 623.92C813.138 623.217 811.95 622.685 810.701 622.342L806.648 621.229C804.81 620.724 803.01 620.088 801.263 619.326L798.599 618.164C797.176 617.543 795.823 616.772 794.563 615.865L793.492 615.094C791.393 613.583 789.681 611.596 788.496 609.296C787.769 607.883 787.25 606.372 786.958 604.81L786.734 603.62C786.453 602.12 786.312 600.598 786.312 599.072V595.054L786.374 594.467C786.573 592.593 787.036 590.757 787.749 589.013L787.942 588.54C788.897 586.2 790.345 584.093 792.185 582.36C793.099 581.5 794.102 580.74 795.177 580.092L795.74 579.752C797.301 578.812 798.965 578.053 800.699 577.492L803.887 576.46L821.101 573.39L825.295 572.074C826.827 571.593 828.231 570.771 829.4 569.67L829.808 569.287C830.637 568.506 831.291 567.557 831.726 566.504C832.128 565.532 832.335 564.49 832.335 563.437V561.467C832.335 560.223 832.029 558.998 831.446 557.9L831.405 557.822C830.712 556.518 829.641 555.454 828.332 554.769C827.505 554.336 826.603 554.066 825.674 553.972L824.587 553.863C822.884 553.691 821.163 553.858 819.524 554.353L819.186 554.456C817.694 554.907 816.282 555.593 815.005 556.486L810.592 559.573L805.149 563.388C803.105 564.821 800.923 566.046 798.635 567.044C795.985 568.2 793.21 569.045 790.365 569.562L787.058 570.163C785.235 570.494 783.387 570.661 781.535 570.661H776.26C773.831 570.661 771.453 569.968 769.403 568.665C767.088 567.191 765.308 565.012 764.328 562.448L763.671 560.731C762.946 558.835 762.541 556.831 762.473 554.802L762.386 552.223C762.272 548.86 762.882 545.512 764.173 542.405L764.415 541.824C765.118 540.132 766.06 538.55 767.213 537.126L767.707 536.516C768.151 535.967 768.541 535.377 768.872 534.754L768.974 534.561C769.884 532.848 770.289 530.911 770.142 528.977L770.103 528.46C770.038 527.601 769.822 526.761 769.465 525.977C768.76 524.427 767.537 523.171 766.007 522.424L765.534 522.193C764.197 521.541 762.694 521.307 761.223 521.524C758.988 521.853 757.026 523.187 755.9 525.145L755.832 525.262C755.498 525.844 755.241 526.467 755.069 527.116L754.428 529.529C753.942 531.357 753.653 533.232 753.566 535.122L753.487 536.847C753.386 539.03 753.117 541.202 752.684 543.344L751.783 547.797C751.37 549.84 750.717 551.828 749.838 553.719L748.79 555.976C747.845 558.008 746.467 559.808 744.751 561.25L744.482 561.476C743.032 562.696 741.343 563.6 739.524 564.131C737.875 564.613 736.149 564.78 734.438 564.622L731.682 564.367C729.116 564.131 726.633 563.337 724.406 562.042C722.568 560.973 720.938 559.582 719.593 557.936L718.73 556.88C717.048 554.822 715.702 552.51 714.741 550.031L710.574 539.273L706.407 527.162L704.417 523.103C703.574 521.384 702.471 519.806 701.145 518.425L700.689 517.949C698.968 516.156 696.849 514.794 694.504 513.973L693.865 513.75C692.454 513.257 690.964 513.028 689.469 513.074L688.724 513.098C687.131 513.148 685.577 513.606 684.212 514.428L683.922 514.603C682.516 515.451 681.397 516.7 680.708 518.19C680.211 519.268 679.953 520.442 679.953 521.629V523.363C679.953 524.865 680.163 526.359 680.577 527.803L680.681 528.162C681.395 530.652 682.619 532.968 684.273 534.961L684.924 535.745C685.836 536.844 686.845 537.858 687.94 538.774L691.187 541.491L699.34 547.461L703.058 550.599C704.081 551.463 705.03 552.409 705.897 553.429L706.086 553.652C707.5 555.315 708.662 557.178 709.534 559.18L709.702 559.566C710.638 561.714 711.188 564.011 711.326 566.35L711.383 567.317C711.447 568.404 711.37 569.495 711.152 570.562L711.009 571.261C710.723 572.662 710.122 573.98 709.251 575.114C708.568 576.005 707.732 576.766 706.781 577.362L706.499 577.54C705.477 578.181 704.36 578.654 703.19 578.941L702.576 579.092C701.39 579.384 700.172 579.531 698.95 579.531H698.293C696.701 579.531 695.115 579.347 693.566 578.982L692.165 578.653C690.308 578.215 688.493 577.618 686.739 576.868L683.395 575.437L676.436 572.843C675.284 572.414 674.074 572.159 672.847 572.087L671.013 571.979C669.639 571.898 668.273 572.248 667.107 572.98L666.201 573.549C664.836 574.405 664.008 575.903 664.008 577.514C664.008 578.598 664.383 579.647 665.071 580.485L665.472 580.974C666.51 582.239 667.991 583.062 669.613 583.276L677.416 584.307L689.29 585.705C691.966 586.02 694.529 586.963 696.771 588.458L698.746 589.775C700.882 591.2 702.435 593.345 703.121 595.82L703.337 596.599C703.913 598.677 703.689 600.896 702.709 602.818C702.278 603.663 701.71 604.432 701.028 605.093L697.15 608.851C696.318 609.658 695.393 610.362 694.394 610.95Z"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M648.076 626.589L647.994 626.742C647.445 627.776 647.158 628.929 647.158 630.099V630.361C647.158 631.04 647.279 631.712 647.516 632.348C648.094 633.904 649.321 635.13 650.878 635.708L652.535 636.322C653.769 636.78 655.084 636.978 656.398 636.904L658.824 636.767C661.882 636.594 664.866 635.76 667.571 634.324L669.228 633.444C670.095 632.984 670.909 632.431 671.656 631.794L673.296 630.397C673.978 629.816 674.501 629.069 674.814 628.228L675.011 627.696C675.39 626.677 675.331 625.546 674.848 624.572C674.514 623.898 673.995 623.334 673.351 622.946L671.815 622.02C670.494 621.225 669.008 620.742 667.472 620.611L665.049 620.403C662.919 620.221 660.774 620.372 658.691 620.852L655.363 621.618C654.248 621.874 653.175 622.291 652.178 622.854L651.148 623.436C649.844 624.172 648.778 625.266 648.076 626.589Z"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M16.1016 954.871L16.1629 955.079C16.6196 956.627 17.6382 957.948 19.0188 958.783C20.0293 959.395 21.1879 959.718 22.3691 959.718H23.2135C25.2585 959.718 27.2489 959.058 28.8886 957.836L29.5884 957.315C31.5572 955.847 32.7867 953.593 32.9546 951.143L32.9639 951.008C33.1249 948.659 32.2576 946.355 30.5871 944.695L30.5134 944.622C29.1956 943.312 27.4554 942.514 25.6033 942.368C23.401 942.196 21.2281 942.96 19.6197 944.475L19.1221 944.943C17.8252 946.164 16.9028 947.729 16.4627 949.455L16.0321 951.145C15.7196 952.37 15.7436 953.658 16.1016 954.871Z"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M0 1021.27L0.650393 1019.56C1.08138 1018.42 1.90314 1017.47 2.9682 1016.89V1016.89C3.94986 1016.35 5.08144 1016.15 6.18889 1016.32L8.67205 1016.69C10.2574 1016.93 11.7823 1017.47 13.164 1018.28L17.3991 1020.77L21.1484 1023.19C21.9169 1023.68 22.9025 1023.69 23.6769 1023.2V1023.2C24.3636 1022.77 24.7805 1022.02 24.7805 1021.21V1021.17C24.7805 1020.91 24.738 1020.65 24.6546 1020.4L24.0932 1018.72C23.5035 1016.97 22.551 1015.35 21.2974 1013.99L20.2337 1012.83C18.8784 1011.35 17.3152 1010.08 15.5931 1009.05L13.2785 1007.67C11.2903 1006.48 9.47963 1005.02 7.90012 1003.33L6.57327 1001.91C4.01025 999.164 2.35012 995.699 1.81644 991.981L1.66476 990.924C1.43573 989.328 1.51514 987.685 1.88983 986.117V986.117C2.98738 981.525 6.56606 977.865 11.1477 976.723V976.723C12.148 976.474 13.1752 976.348 14.2062 976.348H23.2252C24.7657 976.348 26.2826 975.969 27.6426 975.246V975.246C30.1657 973.903 31.9413 971.486 32.4678 968.677L32.8597 966.586C33.0964 965.324 33.5078 964.1 34.0821 962.951L34.3961 962.323C36.3597 958.395 39.6338 955.275 43.6526 953.504L45.2568 952.797C48.269 951.47 51.5246 950.785 54.8163 950.785H58.3846C63.3481 950.785 68.2612 951.78 72.8331 953.713V953.713C76.7962 955.388 80.4378 957.74 83.5952 960.662L92.4674 968.876C93.9031 970.205 95.5772 971.251 97.4015 971.958V971.958C101.362 973.493 105.779 973.338 109.622 971.529L118.366 967.413L128.16 961.367C132.293 958.816 136.971 957.281 141.812 956.888L145.985 956.549C148.446 956.349 150.918 956.78 153.167 957.799V957.799C155.58 958.893 157.648 960.625 159.149 962.809L161.241 965.852C162.169 967.202 162.741 968.764 162.906 970.394V970.394C163.087 972.178 162.772 973.977 161.996 975.593L160.247 979.24C159.744 980.289 159.317 981.373 158.971 982.483L157.33 987.734C157.019 988.73 156.974 989.79 157.199 990.808V990.808C157.776 993.414 160.01 995.322 162.674 995.484L163.967 995.562C165.517 995.656 167.058 995.28 168.39 994.482L172.145 992.232L179.749 986.126C180.654 985.4 181.619 984.753 182.635 984.192L185.896 982.392C187.747 981.371 189.888 981.001 191.975 981.343L192.751 981.47C194.098 981.69 195.348 982.308 196.341 983.243V983.243C198.302 985.089 199 987.912 198.124 990.459L197.404 992.555C196.916 993.977 196.121 995.274 195.076 996.356L192.016 999.525C189.854 1001.76 187.358 1003.65 184.617 1005.13L181.328 1006.9C178.934 1008.19 176.259 1008.86 173.54 1008.86H169.049C167.326 1008.86 165.681 1009.58 164.512 1010.85L164.432 1010.93C162.479 1013.05 162.292 1016.25 163.984 1018.57V1018.57C164.326 1019.04 164.736 1019.46 165.199 1019.82L168.718 1022.51"
            stroke="white"
            stroke-dasharray="10 5"
          />
          <path
            d="M96.0512 950.007L98.4284 952.509C99.0347 953.147 99.3325 954.017 99.2439 954.893C99.0467 956.843 100.73 958.461 102.671 958.187L103.346 958.091C103.862 958.019 104.355 957.834 104.79 957.55L106.983 956.12C109.588 954.423 111.615 951.973 112.796 949.097L113.727 946.828C114.874 944.032 115.464 941.038 115.464 938.016V933.528C115.464 932.634 115.257 931.753 114.857 930.954C113.929 929.098 112.074 927.885 110.001 927.779L106.82 927.618C104.717 927.511 102.626 927.998 100.787 929.024L99.3479 929.827C97.4687 930.875 95.884 932.38 94.74 934.203C93.6343 935.964 92.9743 937.969 92.817 940.043L92.7905 940.391C92.6194 942.647 93.0427 944.908 94.0184 946.95L94.1824 947.293C94.6591 948.29 95.2897 949.206 96.0512 950.007Z"
            stroke="white"
            stroke-dasharray="10 5"
          />
        </svg>

        <svg
          v-if="slug === 'design'"
          class="mobile"
          viewBox="0 0 360 666"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_44_39)">
            <path
              d="M226.204 3.70101L223.65 2.10497C222.961 1.67442 222.543 0.919365 222.543 0.107002C222.543 -0.542645 222.811 -1.16347 223.284 -1.60871L223.435 -1.75108C223.882 -2.17122 224.452 -2.43545 225.061 -2.50423L229.886 -3.04897L233.121 -3.41652C233.689 -3.48114 234.249 -3.6076 234.791 -3.79366L235.931 -4.18582C236.597 -4.41471 237.184 -4.82818 237.624 -5.37801C238.151 -6.03656 238.438 -6.85481 238.438 -7.69817V-8.3325C238.438 -9.19473 238.211 -10.0417 237.779 -10.7879C237.538 -11.2036 237.237 -11.5817 236.887 -11.9101L233.585 -15.001C233.227 -15.3364 232.895 -15.6995 232.594 -16.087L232.086 -16.7402C231.436 -17.5759 231.011 -18.5644 230.853 -19.6111L230.783 -20.0707C230.682 -20.7356 230.741 -21.4148 230.953 -22.0528L231.16 -22.6732C231.299 -23.0899 231.562 -23.4543 231.913 -23.7179C232.287 -23.9982 232.741 -24.1497 233.209 -24.1497H234.015C234.419 -24.1497 234.82 -24.0727 235.195 -23.9226C235.735 -23.7064 236.206 -23.3456 236.555 -22.8798L236.988 -22.3024C237.272 -21.9242 237.508 -21.5124 237.691 -21.0764L238.624 -18.8513L239.733 -15.3295C240.046 -14.3346 240.477 -13.3809 241.018 -12.4888L241.476 -11.734C241.865 -11.0913 242.351 -10.5124 242.917 -10.0175C243.821 -9.2261 244.906 -8.66934 246.077 -8.39626L246.203 -8.36675C246.788 -8.23036 247.386 -8.16149 247.986 -8.16149H248.877C249.291 -8.16149 249.703 -8.20992 250.106 -8.30581C250.988 -8.51593 251.802 -8.94876 252.47 -9.56297L252.65 -9.72843C253.389 -10.4089 253.954 -11.2578 254.295 -12.2031L254.48 -12.7161C254.814 -13.6388 254.984 -14.6123 254.984 -15.5932V-16.7133L254.957 -17.0873C254.789 -19.3758 254.458 -21.6494 253.965 -23.8905L253.169 -27.5147C252.954 -28.491 252.846 -29.4876 252.846 -30.4871V-32.8748C252.846 -33.7958 253.094 -34.6999 253.563 -35.4923L253.662 -35.6592C254.1 -36.3985 254.742 -36.9959 255.511 -37.3802L255.536 -37.3927C256.327 -37.7883 257.219 -37.9353 258.095 -37.8145C258.975 -37.6931 259.797 -37.3076 260.453 -36.709L260.633 -36.5439C261.257 -35.9741 261.732 -35.26 262.017 -34.4641L262.132 -34.1415C262.384 -33.4347 262.513 -32.6897 262.513 -31.9392V-30.4381C262.513 -29.1635 262.353 -27.8939 262.037 -26.6593L261.584 -24.8934L260.919 -23.0152C259.946 -20.2653 259.515 -17.353 259.649 -14.4391L259.732 -12.6224C259.789 -11.3917 260.044 -10.1783 260.488 -9.02908L260.718 -8.43301C261.166 -7.27444 261.861 -6.22754 262.755 -5.36541C263.577 -4.57281 264.55 -3.95322 265.615 -3.54333L266.118 -3.35005C267.117 -2.96567 268.17 -2.73612 269.238 -2.66933L270.205 -2.60888C272.363 -2.47401 274.487 -3.19963 276.111 -4.6269C276.465 -4.9377 276.791 -5.27848 277.086 -5.64543L279.684 -8.8773C280.194 -9.51164 280.8 -10.0623 281.48 -10.5093L282.164 -10.9584C283.164 -11.6159 284.355 -11.9228 285.548 -11.831L285.771 -11.8139C286.785 -11.7359 287.747 -11.3334 288.514 -10.6661C289.141 -10.1214 289.613 -9.4216 289.883 -8.63687L290.063 -8.11454C290.283 -7.47744 290.316 -6.79085 290.159 -6.13555C289.955 -5.28549 289.443 -4.54106 288.723 -4.0458L287.745 -3.37338C287.164 -2.97375 286.522 -2.66945 285.845 -2.47194L283.829 -1.88383C282.881 -1.60749 281.956 -1.26038 281.061 -0.845413L279.736 -0.231644C278.977 0.119999 278.259 0.553715 277.595 1.06174L277.141 1.40876C276.019 2.26713 275.113 3.37653 274.496 4.64803C274.132 5.40021 273.873 6.19931 273.728 7.02252L273.604 7.72229C273.461 8.53402 273.389 9.35671 273.389 10.181V12.3815L273.425 12.741C273.525 13.7363 273.757 14.7137 274.116 15.6473L274.251 15.9984C274.725 17.2297 275.451 18.3479 276.384 19.2807C276.865 19.7614 277.396 20.1887 277.969 20.5551L278.212 20.7109C279.022 21.2292 279.891 21.6491 280.8 21.9616L281.288 22.1294C282.032 22.3852 282.794 22.5872 283.567 22.7337L291.236 24.1868L293.33 24.8845C294.154 25.1592 294.903 25.6221 295.517 26.2364L295.678 26.3975C296.12 26.8399 296.466 27.3695 296.693 27.9527C296.896 28.4741 297 29.0286 297 29.5881V30.7266C297 31.3774 296.848 32.0192 296.557 32.6013L296.494 32.7273C296.157 33.4008 295.625 33.9568 294.967 34.3225C294.529 34.5655 294.048 34.7182 293.55 34.7715L293.031 34.8271C292.154 34.921 291.267 34.8302 290.428 34.5603L290.239 34.4997C289.484 34.2569 288.773 33.8915 288.136 33.4183L285.845 31.7162L283.02 29.6125C281.994 28.848 280.891 28.1915 279.73 27.6533C278.358 27.0179 276.915 26.5518 275.431 26.2654L273.778 25.9465C272.839 25.7653 271.885 25.6741 270.929 25.6741H268.333C267.024 25.6741 265.745 26.0658 264.66 26.7988C263.507 27.578 262.631 28.7037 262.16 30.0132L261.758 31.1284C261.396 32.1337 261.195 33.1896 261.161 34.2575L261.113 35.7735C261.056 37.5737 261.364 39.3667 262.021 41.0439L262.164 41.4106C262.519 42.3176 262.999 43.1708 263.589 43.9456L263.833 44.2654C264.068 44.5743 264.274 44.9047 264.448 45.2521L264.486 45.3291C264.959 46.2755 265.169 47.3317 265.094 48.3871L265.072 48.7C265.039 49.1486 264.933 49.5886 264.756 50.002C264.388 50.8604 263.733 51.5646 262.904 51.9945L262.741 52.079C262.05 52.4376 261.262 52.5661 260.492 52.4459C259.364 52.2697 258.383 51.5771 257.839 50.5734L257.74 50.389C257.576 50.0877 257.452 49.7671 257.369 49.4347L257.029 48.0762C256.782 47.0872 256.635 46.0758 256.591 45.0574L256.549 44.0989C256.497 42.9099 256.36 41.7262 256.137 40.557L255.666 38.0853C255.46 37.0031 255.133 35.9474 254.691 34.9381L254.104 33.5964C253.643 32.5412 252.959 31.5979 252.1 30.8308L251.892 30.6453C251.173 30.0034 250.325 29.5233 249.404 29.2376C248.547 28.9716 247.645 28.8797 246.752 28.9672L245.431 29.0967C244.071 29.23 242.76 29.6726 241.598 30.3904C240.676 30.9597 239.866 31.6914 239.205 32.55L238.691 33.2184C237.846 34.3174 237.174 35.5395 236.699 36.8421L234.534 42.7778L232.396 49.3776L231.346 51.6516C230.933 52.5473 230.386 53.3752 229.725 54.1072L229.41 54.4567C228.562 55.3946 227.501 56.1142 226.316 56.5543L225.959 56.687C225.238 56.955 224.471 57.0797 223.702 57.054L223.385 57.0435C222.53 57.0149 221.697 56.7563 220.976 56.2948L220.921 56.2594C220.16 55.7726 219.562 55.0703 219.202 54.2421C218.953 53.6699 218.825 53.0527 218.825 52.4287V51.4455C218.825 50.6282 218.933 49.8145 219.146 49.0255L219.193 48.8515C219.563 47.4809 220.204 46.1985 221.078 45.0797L221.359 44.7212C221.837 44.1085 222.37 43.5404 222.951 43.0239L224.588 41.5694L228.771 38.3159L230.657 36.6252C231.196 36.142 231.694 35.6151 232.146 35.0498L232.199 34.9837C232.946 34.0495 233.556 33.0133 234.01 31.9066L234.078 31.74C234.565 30.555 234.849 29.2971 234.92 28.0182L234.95 27.4833C234.982 26.8991 234.943 26.3131 234.832 25.7385L234.749 25.3028C234.607 24.5677 234.307 23.8724 233.869 23.2655C233.509 22.7683 233.064 22.3394 232.554 21.9991L232.459 21.9357C231.925 21.5798 231.335 21.3155 230.715 21.1535L230.44 21.082C229.825 20.9216 229.193 20.8404 228.558 20.8404H228.234C227.417 20.8404 226.604 20.9405 225.812 21.1385L225.081 21.3213C224.134 21.558 223.211 21.8802 222.323 22.284L220.591 23.0714L217.015 24.4867C216.428 24.7191 215.808 24.8576 215.178 24.897L214.318 24.9507C213.563 24.9979 212.814 24.7962 212.184 24.3767L211.825 24.1373C211.088 23.6456 210.645 22.8178 210.645 21.9313C210.645 21.3446 210.839 20.7745 211.198 20.3102L211.365 20.0938C211.916 19.3806 212.724 18.9112 213.617 18.7859L217.523 18.2377L223.491 17.4917C224.943 17.3102 226.328 16.7725 227.523 15.9265L228.367 15.3285C229.528 14.5058 230.362 13.2996 230.721 11.9224L230.83 11.5049C231.121 10.3904 231.007 9.20895 230.509 8.17058C230.281 7.69662 229.978 7.26265 229.612 6.88554L227.663 4.87887C227.226 4.42895 226.736 4.03346 226.204 3.70101Z"
              stroke="white"
              stroke-dasharray="10 5"
            />
            <path
              d="M274.093 48.3102L274.318 47.9828L274.337 47.9626C274.933 47.3066 275.695 46.824 276.544 46.5658C277.101 46.3963 277.683 46.3271 278.264 46.3613L278.698 46.3868C279.883 46.4565 280.993 46.9871 281.791 47.865C282.196 48.3109 282.509 48.8329 282.71 49.4008L282.827 49.7283C283.218 50.8322 283.271 52.028 282.977 53.1618L282.945 53.2825C282.834 53.7135 282.664 54.1273 282.442 54.5129L282.39 54.6026C281.747 55.7176 280.675 56.5203 279.424 56.8236C278.695 57.0002 277.935 57.0002 277.207 56.8236L277.079 56.7926C275.895 56.5056 274.848 55.8158 274.117 54.8413L274.039 54.7368C273.731 54.3265 273.488 53.8715 273.319 53.3875C273.059 52.6454 272.978 51.8525 273.082 51.0732L273.11 50.8651C273.232 49.948 273.569 49.0727 274.093 48.3102Z"
              stroke="white"
              stroke-dasharray="10 5"
            />
            <path
              d="M48.7701 620.143L48.8461 620.417C49.1128 621.377 49.7232 622.205 50.5612 622.743C51.2155 623.164 51.977 623.388 52.7549 623.388H53.2203C54.4914 623.388 55.7252 622.958 56.7218 622.169L57.1091 621.863C58.3966 620.844 59.1919 619.326 59.2976 617.688L59.3127 617.453C59.407 615.992 58.8882 614.557 57.8811 613.494L57.7294 613.334C56.9371 612.498 55.8646 611.983 54.7166 611.887C53.3429 611.773 51.9884 612.269 51.0137 613.243L50.6068 613.65C49.8338 614.423 49.2896 615.395 49.0345 616.458L48.7275 617.737C48.5373 618.53 48.552 619.358 48.7701 620.143Z"
              stroke="white"
              stroke-dasharray="10 5"
            />
            <path
              d="M38.7305 664.19L39.1648 662.974C39.4156 662.272 39.9062 661.681 40.5502 661.305V661.305C41.1821 660.937 41.9221 660.798 42.6444 660.914L44.1524 661.155C45.1345 661.312 46.075 661.665 46.9184 662.192L49.589 663.861L51.8956 665.439C52.3907 665.778 53.042 665.782 53.5411 665.449V665.449C53.9501 665.177 54.1957 664.718 54.1957 664.226V664.119C54.1957 663.948 54.1696 663.778 54.1182 663.616L53.7733 662.524C53.4007 661.344 52.7915 660.252 51.9828 659.316L51.3892 658.629C50.5229 657.625 49.5136 656.755 48.3938 656.046L47.1146 655.236C45.8095 654.409 44.6292 653.401 43.6094 652.24L42.9179 651.453C41.2601 649.567 40.1963 647.233 39.86 644.744L39.7595 644.001C39.623 642.99 39.6677 641.964 39.8915 640.969L39.9879 640.541C40.6306 637.684 42.8093 635.422 45.6399 634.673V634.673C46.2956 634.499 46.9711 634.411 47.6494 634.411H53.1333C54.1533 634.411 55.1559 634.148 56.0438 633.646V633.646C57.5822 632.776 58.6512 631.265 58.9583 629.524L59.2429 627.912C59.3873 627.093 59.6397 626.298 59.9935 625.546L60.1704 625.17C61.4128 622.53 63.5395 620.408 66.182 619.171L66.878 618.845C68.8193 617.936 70.9365 617.465 73.0799 617.465H75.0522C78.2224 617.465 81.3567 618.137 84.2488 619.435V619.435C86.6789 620.526 88.8956 622.041 90.795 623.909L96.4979 629.517C97.3542 630.359 98.3656 631.027 99.4761 631.484V631.484C101.962 632.508 104.768 632.405 107.173 631.203L112.602 628.489L118.797 624.426C121.318 622.773 124.21 621.772 127.213 621.513L129.755 621.294C131.343 621.157 132.937 621.45 134.373 622.141V622.141C135.844 622.849 137.091 623.949 137.978 625.32L139.338 627.421C139.932 628.339 140.296 629.386 140.399 630.473V630.473C140.512 631.652 140.314 632.84 139.827 633.92L138.267 637.373L136.904 642.008C136.719 642.637 136.692 643.303 136.826 643.945V643.945C137.192 645.7 138.683 646.995 140.472 647.111L141.014 647.145C142.009 647.21 142.998 646.956 143.84 646.42L146.165 644.941L150.942 640.866C151.485 640.403 152.068 639.988 152.684 639.627L154.752 638.415C155.9 637.742 157.249 637.498 158.56 637.726L158.907 637.786C159.822 637.945 160.666 638.384 161.323 639.041V639.041C162.521 640.239 162.947 642.007 162.425 643.618L161.937 645.128C161.626 646.089 161.114 646.973 160.435 647.72L158.528 649.817C157.204 651.274 155.659 652.513 153.95 653.49L151.881 654.672C150.399 655.519 148.722 655.964 147.015 655.964H144.405C143.224 655.964 142.1 656.476 141.325 657.368V657.368C140.105 658.77 140.003 660.842 141.052 662.375V662.375C141.276 662.703 141.55 663.001 141.858 663.252L144.026 665.013"
              stroke="white"
              stroke-dasharray="10 5"
            />
            <path
              d="M98.69 616.966L100.166 618.616C100.542 619.036 100.726 619.594 100.672 620.155C100.548 621.464 101.685 622.541 102.985 622.346L103.212 622.312C103.545 622.262 103.861 622.137 104.138 621.945L105.559 620.962C107.146 619.863 108.367 618.312 109.063 616.511L109.736 614.769C110.434 612.962 110.792 611.043 110.792 609.106V605.968C110.792 605.413 110.67 604.866 110.434 604.364C109.844 603.111 108.613 602.282 107.23 602.208L105.438 602.111C104.102 602.039 102.774 602.364 101.622 603.047L100.832 603.515C99.595 604.248 98.5628 605.281 97.8312 606.52C97.158 607.659 96.7585 608.939 96.6642 610.259L96.6378 610.628C96.5333 612.092 96.7939 613.559 97.3962 614.898L97.5095 615.15C97.8075 615.812 98.2057 616.424 98.69 616.966Z"
              stroke="white"
              stroke-dasharray="10 5"
            />
          </g>
          <defs>
            <clipPath id="clip0_44_39">
              <rect
                width="360"
                height="666"
                fill="white"
              />
            </clipPath>
          </defs>
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

      .tablet-max({
        height: 100vh;
        top: 0;
      });
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

    .tablet-max({
      font-size: 48px;
    });

    .mobile-max({
      font-size: 24px;
      width: 95%;
    });
  }

  &__title-3 {
    width: 100%;
    top: 47vh;
  }

  .desktop {
    display: block;

    .tablet-max({
      display: none;
    });

    .mobile-max({
      display: none;
    });
  }

  .tablet {
    display: none;

    .tablet-max({
      display: block;
    });

    .mobile-max({
      display: none;
    });
  }

  .mobile {
    display: none;

    .mobile-max({
      display: block;
    });
  }
}
</style>
