export function ConventionalBusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main body - rounded modern design */}
      <rect
        x="50"
        y="75"
        width="300"
        height="80"
        rx="12"
        className="fill-slate-700 dark:fill-slate-600"
      />

      {/* Top section */}
      <rect
        x="60"
        y="65"
        width="280"
        height="20"
        rx="10"
        className="fill-slate-600 dark:fill-slate-500"
      />

      {/* Windows - large rounded windows */}
      <rect
        x="70"
        y="85"
        width="50"
        height="45"
        rx="6"
        className="fill-sky-100 dark:fill-sky-200 opacity-90"
      />
      <rect
        x="130"
        y="85"
        width="50"
        height="45"
        rx="6"
        className="fill-sky-100 dark:fill-sky-200 opacity-90"
      />
      <rect
        x="190"
        y="85"
        width="50"
        height="45"
        rx="6"
        className="fill-sky-100 dark:fill-sky-200 opacity-90"
      />
      <rect
        x="250"
        y="85"
        width="50"
        height="45"
        rx="6"
        className="fill-sky-100 dark:fill-sky-200 opacity-90"
      />
      <rect
        x="310"
        y="85"
        width="30"
        height="45"
        rx="6"
        className="fill-sky-100 dark:fill-sky-200 opacity-90"
      />

      {/* Accent stripe - curved */}
      <rect
        x="50"
        y="140"
        width="300"
        height="6"
        rx="3"
        className="fill-blue-500 dark:fill-blue-400"
      />

      {/* Wheels - modern rounded design */}
      <circle
        cx="100"
        cy="165"
        r="22"
        className="fill-slate-900 dark:fill-slate-800"
      />
      <circle
        cx="100"
        cy="165"
        r="16"
        className="fill-slate-300 dark:fill-slate-400"
      />
      <circle
        cx="100"
        cy="165"
        r="8"
        className="fill-slate-600 dark:fill-slate-500"
      />

      <circle
        cx="300"
        cy="165"
        r="22"
        className="fill-slate-900 dark:fill-slate-800"
      />
      <circle
        cx="300"
        cy="165"
        r="16"
        className="fill-slate-300 dark:fill-slate-400"
      />
      <circle
        cx="300"
        cy="165"
        r="8"
        className="fill-slate-600 dark:fill-slate-500"
      />

      {/* Headlights - rounded */}
      <circle
        cx="345"
        cy="110"
        r="6"
        className="fill-amber-300 dark:fill-amber-200 opacity-80"
      />
      <circle
        cx="345"
        cy="125"
        r="6"
        className="fill-amber-300 dark:fill-amber-200 opacity-80"
      />

      {/* Door indicator */}
      <rect
        x="185"
        y="135"
        width="30"
        height="3"
        rx="1.5"
        className="fill-slate-500 dark:fill-slate-400"
      />
    </svg>
  );
}

export function ElectricBusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main body - aerodynamic rounded shape */}
      <path
        d="M 70 75 Q 50 75 50 95 L 50 145 Q 50 155 60 155 L 340 155 Q 350 155 350 145 L 350 95 Q 350 75 330 75 Z"
        className="fill-emerald-600 dark:fill-emerald-500"
      />

      {/* Top curved section */}
      <path
        d="M 80 65 Q 70 65 70 75 L 330 75 Q 330 65 320 65 Z"
        className="fill-emerald-500 dark:fill-emerald-400"
      />

      {/* Large panoramic windows - rounded */}
      <rect
        x="70"
        y="85"
        width="120"
        height="50"
        rx="8"
        className="fill-sky-50 dark:fill-sky-100 opacity-90"
      />
      <rect
        x="210"
        y="85"
        width="120"
        height="50"
        rx="8"
        className="fill-sky-50 dark:fill-sky-100 opacity-90"
      />

      {/* Electric badge with lightning */}
      <circle
        cx="315"
        cy="105"
        r="18"
        className="fill-lime-400 dark:fill-lime-300"
      />
      <path
        d="M 320 95 L 312 108 L 318 108 L 313 118 L 323 105 L 317 105 Z"
        className="fill-white dark:fill-emerald-900"
      />

      {/* Eco accent line */}
      <rect
        x="50"
        y="142"
        width="300"
        height="5"
        rx="2.5"
        className="fill-lime-400 dark:fill-lime-300"
      />

      {/* Modern LED headlights - rounded */}
      <ellipse
        cx="340"
        cy="110"
        rx="8"
        ry="5"
        className="fill-cyan-200 dark:fill-cyan-300 opacity-90"
      />
      <ellipse
        cx="340"
        cy="125"
        rx="8"
        ry="5"
        className="fill-cyan-200 dark:fill-cyan-300 opacity-90"
      />

      {/* Wheels - sleek modern design */}
      <circle
        cx="100"
        cy="168"
        r="22"
        className="fill-slate-900 dark:fill-slate-800"
      />
      <circle
        cx="100"
        cy="168"
        r="15"
        className="fill-slate-300 dark:fill-slate-400"
      />
      <circle
        cx="100"
        cy="168"
        r="8"
        className="fill-emerald-600 dark:fill-emerald-500"
      />

      <circle
        cx="300"
        cy="168"
        r="22"
        className="fill-slate-900 dark:fill-slate-800"
      />
      <circle
        cx="300"
        cy="168"
        r="15"
        className="fill-slate-300 dark:fill-slate-400"
      />
      <circle
        cx="300"
        cy="168"
        r="8"
        className="fill-emerald-600 dark:fill-emerald-500"
      />
    </svg>
  );
}

export function MiniVanIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main body - rounded van shape */}
      <path
        d="M 90 80 Q 80 80 80 90 L 80 145 Q 80 155 90 155 L 310 155 L 310 145 L 320 145 L 320 155 L 335 155 Q 345 155 345 145 L 345 110 Q 345 100 335 100 L 320 100 L 320 90 Q 320 80 310 80 Z"
        className="fill-indigo-600 dark:fill-indigo-500"
      />

      {/* Roof section */}
      <rect
        x="90"
        y="70"
        width="220"
        height="20"
        rx="10"
        className="fill-indigo-500 dark:fill-indigo-400"
      />

      {/* Windshield - curved */}
      <path
        d="M 310 80 Q 320 80 325 90 L 325 110 L 310 110 Z"
        className="fill-blue-200 dark:fill-blue-300 opacity-70"
      />

      {/* Side windows - rounded */}
      <rect
        x="100"
        y="90"
        width="60"
        height="45"
        rx="6"
        className="fill-blue-200 dark:fill-blue-300 opacity-70"
      />
      <rect
        x="170"
        y="90"
        width="60"
        height="45"
        rx="6"
        className="fill-blue-200 dark:fill-blue-300 opacity-70"
      />
      <rect
        x="240"
        y="90"
        width="60"
        height="45"
        rx="6"
        className="fill-blue-200 dark:fill-blue-300 opacity-70"
      />

      {/* Side accent */}
      <rect
        x="80"
        y="140"
        width="265"
        height="4"
        rx="2"
        className="fill-indigo-400 dark:fill-indigo-300"
      />

      {/* Headlight - rounded */}
      <circle
        cx="335"
        cy="120"
        r="7"
        className="fill-amber-300 dark:fill-amber-200 opacity-80"
      />

      {/* Wheels - rounded modern design */}
      <circle
        cx="130"
        cy="168"
        r="20"
        className="fill-slate-900 dark:fill-slate-800"
      />
      <circle
        cx="130"
        cy="168"
        r="14"
        className="fill-slate-300 dark:fill-slate-400"
      />
      <circle
        cx="130"
        cy="168"
        r="7"
        className="fill-slate-600 dark:fill-slate-500"
      />

      <circle
        cx="290"
        cy="168"
        r="20"
        className="fill-slate-900 dark:fill-slate-800"
      />
      <circle
        cx="290"
        cy="168"
        r="14"
        className="fill-slate-300 dark:fill-slate-400"
      />
      <circle
        cx="290"
        cy="168"
        r="7"
        className="fill-slate-600 dark:fill-slate-500"
      />

      {/* Side mirror - rounded */}
      <ellipse
        cx="330"
        cy="95"
        rx="6"
        ry="8"
        className="fill-indigo-700 dark:fill-indigo-600"
      />

      {/* Door handle */}
      <rect
        x="165"
        y="120"
        width="15"
        height="3"
        rx="1.5"
        className="fill-indigo-800 dark:fill-indigo-700"
      />
    </svg>
  );
}

export function ExecutiveCarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main body - elegant sedan profile with curves */}
      <path
        d="M 100 115 Q 110 95 130 85 L 180 75 L 260 75 Q 285 75 300 90 L 330 110 Q 340 115 340 125 L 340 140 Q 340 150 330 150 L 90 150 Q 80 150 80 140 L 80 125 Q 80 115 90 115 Z"
        className="fill-slate-800 dark:fill-slate-700"
      />

      {/* Roof - smooth curve */}
      <path
        d="M 140 85 Q 145 78 155 75 L 255 75 Q 270 75 280 85 L 285 95 Q 285 100 280 100 L 150 100 Q 145 100 145 95 Z"
        className="fill-slate-700 dark:fill-slate-600"
      />

      {/* Windows - rounded elegant */}
      <path
        d="M 148 87 Q 152 80 160 78 L 175 78 L 175 98 L 152 98 Z"
        className="fill-sky-100 dark:fill-sky-200 opacity-85"
      />
      <rect
        x="185"
        y="78"
        width="60"
        height="20"
        rx="2"
        className="fill-sky-100 dark:fill-sky-200 opacity-85"
      />
      <path
        d="M 255 78 L 270 78 Q 278 80 282 87 L 278 98 L 255 98 Z"
        className="fill-sky-100 dark:fill-sky-200 opacity-85"
      />

      {/* Side body line - elegant curve */}
      <path
        d="M 90 130 Q 150 128 200 128 Q 250 128 330 130"
        className="stroke-slate-600 dark:stroke-slate-500"
        strokeWidth="2"
        fill="none"
      />

      {/* Door line */}
      <line
        x1="210"
        y1="100"
        x2="210"
        y2="150"
        className="stroke-slate-900 dark:stroke-slate-800"
        strokeWidth="1.5"
      />

      {/* Headlights - modern LED style */}
      <ellipse
        cx="328"
        cy="120"
        rx="10"
        ry="6"
        className="fill-slate-100 dark:fill-slate-200 opacity-90"
      />

      {/* Taillights - rounded */}
      <rect
        x="85"
        y="120"
        width="10"
        height="12"
        rx="2"
        className="fill-red-500 dark:fill-red-400 opacity-80"
      />

      {/* Wheels - luxury alloy with rounded design */}
      <circle
        cx="140"
        cy="160"
        r="20"
        className="fill-slate-900 dark:fill-slate-800"
      />
      <circle
        cx="140"
        cy="160"
        r="14"
        className="fill-slate-300 dark:fill-slate-400"
      />
      <circle
        cx="140"
        cy="160"
        r="7"
        className="fill-slate-700 dark:fill-slate-600"
      />
      {/* Elegant spoke pattern */}
      <circle
        cx="140"
        cy="160"
        r="10"
        className="stroke-slate-500 dark:stroke-slate-400"
        strokeWidth="1"
        fill="none"
      />

      <circle
        cx="280"
        cy="160"
        r="20"
        className="fill-slate-900 dark:fill-slate-800"
      />
      <circle
        cx="280"
        cy="160"
        r="14"
        className="fill-slate-300 dark:fill-slate-400"
      />
      <circle
        cx="280"
        cy="160"
        r="7"
        className="fill-slate-700 dark:fill-slate-600"
      />
      {/* Elegant spoke pattern */}
      <circle
        cx="280"
        cy="160"
        r="10"
        className="stroke-slate-500 dark:stroke-slate-400"
        strokeWidth="1"
        fill="none"
      />

      {/* Side mirror - rounded elegant */}
      <ellipse
        cx="305"
        cy="100"
        rx="8"
        ry="10"
        className="fill-slate-700 dark:fill-slate-600"
      />

      {/* Door handle - subtle rounded */}
      <rect
        x="240"
        y="125"
        width="20"
        height="3"
        rx="1.5"
        className="fill-slate-600 dark:fill-slate-500"
      />
    </svg>
  );
}
