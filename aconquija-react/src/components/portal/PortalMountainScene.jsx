function PortalMountainScene() {
  return (
    <div className="portal-landscape" aria-hidden="true">
      <svg
        className="portal-landscape__art"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <defs>
          <linearGradient id="aconquija-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--sky-top)" />
            <stop offset="58%" stopColor="var(--sky-horizon)" />
            <stop offset="100%" stopColor="var(--sky-low)" />
          </linearGradient>
          <linearGradient id="aconquija-distant-mist" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--mist-light)" stopOpacity=".05" />
            <stop offset="100%" stopColor="var(--mist-light)" stopOpacity=".82" />
          </linearGradient>
          <linearGradient id="aconquija-ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--ground-top)" />
            <stop offset="100%" stopColor="var(--ground-bottom)" />
          </linearGradient>
        </defs>

        <rect width="1600" height="1000" fill="url(#aconquija-sky)" />

        <g className="portal-landscape__clouds">
          <path d="M-40 255Q120 220 265 246T570 238T875 245T1180 230T1650 245" fill="none" stroke="var(--cloud)" strokeWidth="3" opacity=".25" />
          <path d="M90 305Q250 278 420 294T760 287M980 300Q1190 268 1480 290" fill="none" stroke="var(--cloud)" strokeWidth="2" opacity=".2" />
          <path d="M180 150Q340 132 490 150M1030 170Q1210 145 1410 166" fill="none" stroke="var(--cloud)" strokeWidth="2" opacity=".16" />
        </g>

        <g className="portal-landscape__birds" fill="none" stroke="var(--bird)" strokeWidth="4" strokeLinecap="round">
          <path d="M330 175q-12-18-25-8q12 1 17 16q5-15 20-17q-8-7-12 9" />
          <path d="M430 132q-11-17-23-7q10 1 15 14q5-13 18-15q-7-7-10 8" />
          <path d="M505 190q-9-14-20-6q9 1 13 12q4-11 15-13q-6-5-8 7" />
          <path d="M1180 155q-10-15-21-6q9 1 14 13q4-12 16-14q-6-6-9 7" />
        </g>

        <g className="portal-landscape__ridge portal-landscape__ridge--far">
          <path d="M-30 560 95 430 170 470 300 345 390 390 520 285 625 390 755 245 850 355 990 225 1110 370 1225 305 1350 425 1455 355 1630 465V1000H-30Z" fill="var(--land-far)" />
          <path d="m30 500 65-70 45 22 30 45m130-152 40 45 45-18 30-50m105 4 130-41 72 76m150-116 95 110 45-20m130-125 90 115 48-24m120 74 75 66" fill="none" stroke="var(--snow)" strokeWidth="12" strokeLinejoin="round" opacity=".58" />
          <path d="M0 555 175 475 300 520 435 450 565 520 700 430 840 520 990 420 1135 515 1290 450 1450 520 1600 475V680H0Z" fill="var(--land-far-shadow)" opacity=".5" />
        </g>

        <g className="portal-landscape__ridge portal-landscape__ridge--middle">
          <path d="M-20 660 115 555 220 595 350 475 455 545 590 420 710 535 835 410 955 535 1085 435 1210 550 1335 470 1460 565 1620 490V1000H-20Z" fill="var(--land-mid)" />
          <path d="M0 645 165 580 300 625 455 555 590 630 750 535 900 635 1065 540 1215 640 1380 555 1530 625 1600 600V770H0Z" fill="var(--land-mid-shadow)" opacity=".7" />
        </g>

        <path d="M0 615Q230 580 430 630T830 615T1240 620T1600 600V820H0Z" fill="url(#aconquija-distant-mist)" />

        <g className="portal-landscape__ridge portal-landscape__ridge--near">
          <path d="M-20 755 120 655 250 700 390 590 510 690 650 575 785 700 925 570 1065 685 1190 590 1325 700 1460 605 1620 710V1000H-20Z" fill="var(--land-near)" />
          <path d="M0 755 170 690 310 730 470 665 625 740 800 655 955 740 1120 660 1280 735 1450 660 1600 720V1000H0Z" fill="var(--land-near-shadow)" opacity=".75" />
        </g>

        <path d="M0 690Q300 655 560 700T1080 690T1600 680V1000H0Z" fill="url(#aconquija-ground)" />

        <g className="portal-landscape__forest portal-landscape__forest--back" fill="var(--forest-back)">
          <path d="M0 790 28 675 56 790 45 790 82 650 119 790 105 790 145 700 184 790 170 790 210 655 250 790 236 790 275 700 314 790 300 790 342 645 384 790 370 790 410 690 450 790 436 790 478 650 520 790 506 790 548 695 590 790 576 790 618 650 660 790 646 790 688 700 730 790 716 790 758 650 800 790 786 790 828 690 870 790 856 790 898 645 940 790 926 790 968 690 1010 790 996 790 1038 650 1080 790 1066 790 1108 695 1150 790 1136 790 1178 650 1220 790 1206 790 1248 690 1290 790 1276 790 1318 645 1360 790 1346 790 1388 700 1430 790 1416 790 1458 650 1500 790 1486 790 1528 690 1570 790 1556 790 1598 660 1600 790V1000H0Z" />
        </g>

        <g className="portal-landscape__forest portal-landscape__forest--front" fill="var(--forest-front)">
          <path d="M0 880 38 730 76 880 60 880 105 705 150 880 132 880 180 755 228 880 210 880 258 700 306 880 288 880 336 760 384 880 366 880 414 710 462 880 444 880 492 755 540 880 522 880 570 700 618 880 600 880 648 755 696 880 678 880 726 705 774 880 756 880 804 755 852 880 834 880 882 700 930 880 912 880 960 755 1008 880 990 880 1038 705 1086 880 1068 880 1116 755 1164 880 1146 880 1194 700 1242 880 1224 880 1272 755 1320 880 1302 880 1350 705 1398 880 1380 880 1428 755 1476 880 1458 880 1506 700 1554 880 1536 880 1584 730 1600 880V1000H0Z" />
        </g>

        <g className="portal-landscape__animals" fill="var(--forest-front)" stroke="var(--forest-front)" strokeLinecap="round" strokeLinejoin="round">
          <path d="M690 825q-24-20-35-8l-10 20 16-8q11 1 20 12l15 3 10 82 9 0-3-80 23 3 12 78 9 0-5-82q31-12 30-38l-12-23-10-34 9-32-7-4-18 30-13-6-7-28-7 0 2 34 16 18-8 32-28 14-24-15-10-31-7 1 6 37 24 30Zm-31-13-28-24-7 4 21 29Zm101-31 18-28 7 4-12 34Z" />
          <path d="M855 850q-18-24-4-42l31-15 56 4 34 18 20-5 10 7-17 12-22-4-23-13-45 3-17 27-5 62-9 0-1-61-22 4-8 58-9 0 5-65Zm-1-46-20-22 5-6 24 19Zm28-8-9-27 7-3 13 26Z" />
        </g>

        <path className="portal-landscape__mist" d="M0 835Q260 785 520 845T1040 830T1600 820V1000H0Z" fill="var(--land-mist)" />
      </svg>
    </div>
  )
}

export default PortalMountainScene
