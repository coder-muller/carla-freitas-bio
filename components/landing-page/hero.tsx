"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-6xl mx-auto w-full">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                        <svg
                            viewBox="0 0 972 1118.33"
                            className="w-full h-full text-primary"
                        >
                            <path fillRule="evenodd" clipRule="evenodd" d="M155.039 29.1417C150.293 98.6747 131.769 153.954 75.7946 265.592C13.2023 390.43 -2.71209 445.3 0.359119 525.659C1.97734 568.057 8.28213 600.231 22.1481 636.896C36.923 675.958 71.1422 735.398 104.658 780.217C129.361 813.25 187.238 879.534 189.452 877.323C189.976 876.8 186.526 865.192 181.78 851.532C155.877 776.952 150.885 709.411 165.065 625.314C171.868 584.951 175.637 569.481 194.825 503.097C220.825 413.148 235.64 348.583 236.161 322.952C236.341 314.161 236.366 314.146 239.204 321.192C243.913 332.9 245.492 394.301 241.939 427.777C240.116 444.973 233.603 494.854 227.469 538.625C208.58 673.38 207.238 739.596 221.962 810.476C245.306 922.87 312.22 1027.02 419.741 1118.33C447.24 1141.68 451.864 1145.21 447.807 1139.76C446.06 1137.42 438.111 1126.86 430.146 1116.29C399.038 1075.04 376.673 1029.02 365.576 983.439C359.223 957.336 356.961 901.269 361.118 872.915C370.377 809.746 389.129 759.739 451.841 630.999C506.59 518.607 523.55 464.121 523.666 400.25C523.769 345.047 511.199 302.516 479.846 251.986C445.513 196.656 362.377 120.714 282.782 71.9745C255.608 55.3388 201.421 23.8693 181.546 13.1824L157.025 0L155.039 29.1417ZM706.064 573.099C654.52 579.571 610.387 594.746 575.162 618.106C549.629 635.043 515.504 668.241 497.214 693.938C467.992 734.997 441.151 799.255 427.32 861.273C421.938 885.406 412.619 945.79 412.619 956.534C412.619 962.378 418.12 961.75 435.778 953.894C444.194 950.15 461.977 942.345 475.296 936.547C546.9 905.385 589.051 877.533 639.452 828.075C670.617 797.498 685.093 781.655 693.324 769.127C704.227 752.525 700.221 767.66 687.264 792.01C640.652 879.62 586.358 932.818 499.536 975.949C479.154 986.074 458.949 995.237 454.641 996.311C440.131 999.93 446.647 1002.79 474.066 1004.84C528.251 1008.9 593.532 1000.08 640.948 982.316C677.07 968.779 710.839 946.524 742.751 915.225C776.044 882.567 785.936 869.871 836.038 795.466C874.328 738.601 892.798 713.171 909.767 693.943C924.297 677.478 952.04 651.042 961.741 644.414C966.823 640.944 970.989 636.675 971 634.93C971.054 626.059 858.117 587.64 805.511 578.63C779.488 574.173 722.671 571.016 706.064 573.099Z" fill="currentColor" />
                        </svg>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-light text-foreground tracking-tight text-balance">
                            Carla Freitas
                        </h1>
                        <p className="text-xl md:text-2xl text-primary font-medium tracking-wide">BIÓLOGA</p>
                    </div>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
                        Soluções ambientais que unem desenvolvimento, agilidade e responsabilidade com o meio ambiente.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Entre em Contato
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                            onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Conheça os Serviços
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
