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
          <path id="aconquija-pine" d="M50 0 43 24 48 20 36 42 44 37 25 63 40 57 13 88 36 79 4 116 34 104 0 145 38 130 9 165 43 151 18 188 47 172 30 211 48 194 46 248 57 248 54 194 72 211 53 172 82 188 57 151 91 165 62 130 100 145 66 104 96 116 64 79 87 88 60 57 75 63 56 37 64 42 52 20 57 24Z" />
        </defs>

        <rect width="1600" height="1000" fill="url(#aconquija-sky)" />


        <g className="portal-landscape__birds" fill="none" stroke="var(--bird)" strokeWidth="4" strokeLinecap="round">
          <path d="M330 175q-12-18-25-8q12 1 17 16q5-15 20-17q-8-7-12 9" />
          <path d="M430 132q-11-17-23-7q10 1 15 14q5-13 18-15q-7-7-10 8" />
          <path d="M505 190q-9-14-20-6q9 1 13 12q4-11 15-13q-6-5-8 7" />
          <path d="M1180 155q-10-15-21-6q9 1 14 13q4-12 16-14q-6-6-9 7" />
        </g>

        <g className="portal-landscape__ridge portal-landscape__ridge--far">
          <path d="M-30 560 95 430 170 470 300 345 390 390 520 285 625 390 755 245 850 355 990 225 1110 370 1225 305 1350 425 1455 355 1630 465V1000H-30Z" fill="var(--land-far)" />
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
          <use href="#aconquija-pine" transform="translate(-22 575) scale(.58 1.02)" />
          <use href="#aconquija-pine" transform="translate(54 610) scale(.43 .78)" />
          <use href="#aconquija-pine" transform="translate(104 570) scale(.62 1.02)" />
          <use href="#aconquija-pine" transform="translate(192 615) scale(.4 .76)" />
          <use href="#aconquija-pine" transform="translate(245 585) scale(.55 .9)" />
          <use href="#aconquija-pine" transform="translate(322 625) scale(.38 .7)" />
          <use href="#aconquija-pine" transform="translate(378 580) scale(.58 .98)" />
          <use href="#aconquija-pine" transform="translate(468 625) scale(.4 .74)" />
          <use href="#aconquija-pine" transform="translate(530 590) scale(.55 .92)" />
          <use href="#aconquija-pine" transform="translate(620 620) scale(.42 .78)" />
          <use href="#aconquija-pine" transform="translate(680 585) scale(.58 .98)" />
          <use href="#aconquija-pine" transform="translate(770 625) scale(.4 .74)" />
          <use href="#aconquija-pine" transform="translate(830 580) scale(.57 .96)" />
          <use href="#aconquija-pine" transform="translate(920 620) scale(.42 .78)" />
          <use href="#aconquija-pine" transform="translate(980 580) scale(.58 .98)" />
          <use href="#aconquija-pine" transform="translate(1070 625) scale(.4 .74)" />
          <use href="#aconquija-pine" transform="translate(1130 585) scale(.56 .94)" />
          <use href="#aconquija-pine" transform="translate(1220 620) scale(.42 .78)" />
          <use href="#aconquija-pine" transform="translate(1280 570) scale(.62 1.02)" />
          <use href="#aconquija-pine" transform="translate(1370 615) scale(.4 .76)" />
          <use href="#aconquija-pine" transform="translate(1430 570) scale(.62 1.02)" />
          <use href="#aconquija-pine" transform="translate(1515 600) scale(.5 .88)" />
        </g>

        <g className="portal-landscape__forest portal-landscape__forest--front" fill="var(--forest-front)">
          <use href="#aconquija-pine" transform="translate(-48 665) scale(.82 1.34)" />
          <use href="#aconquija-pine" transform="translate(58 700) scale(.62 1.12)" />
          <use href="#aconquija-pine" transform="translate(132 665) scale(.78 1.28)" />
          <use href="#aconquija-pine" transform="translate(230 720) scale(.55 1.02)" />
          <use href="#aconquija-pine" transform="translate(300 680) scale(.75 1.22)" />
          <use href="#aconquija-pine" transform="translate(395 720) scale(.58 1.04)" />
          <use href="#aconquija-pine" transform="translate(468 670) scale(.8 1.3)" />
          <use href="#aconquija-pine" transform="translate(570 720) scale(.58 1.04)" />
          <use href="#aconquija-pine" transform="translate(642 680) scale(.76 1.24)" />
          <use href="#aconquija-pine" transform="translate(740 725) scale(.55 1.02)" />
          <use href="#aconquija-pine" transform="translate(812 670) scale(.82 1.32)" />
          <use href="#aconquija-pine" transform="translate(916 720) scale(.58 1.04)" />
          <use href="#aconquija-pine" transform="translate(990 680) scale(.78 1.26)" />
          <use href="#aconquija-pine" transform="translate(1090 720) scale(.56 1.02)" />
          <use href="#aconquija-pine" transform="translate(1160 665) scale(.82 1.34)" />
          <use href="#aconquija-pine" transform="translate(1265 715) scale(.58 1.04)" />
          <use href="#aconquija-pine" transform="translate(1340 670) scale(.8 1.3)" />
          <use href="#aconquija-pine" transform="translate(1440 715) scale(.58 1.04)" />
          <use href="#aconquija-pine" transform="translate(1510 665) scale(.82 1.34)" />
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
