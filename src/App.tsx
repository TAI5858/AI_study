import { motion, type Variants } from "framer-motion"
import {
  BookOpen,
  GraduationCap,
  Cpu,
  Briefcase,
  Award,
  ArrowDown,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const threePillars = [
  {
    icon: GraduationCap,
    category: "분야 01",
    title: "입시 관리 및 학원 운영·강의",
    items: [
      "노량진 정진학원 / 입시 관리 및 강의 / 팀장 / 10년",
      "이풀수학학원 / 대치동 입시학원 운영 및 강의 / 원장 / 11년",
    ],
  },
  {
    icon: BookOpen,
    category: "분야 02",
    title: "한국어 강의",
    items: [
      "대구과학대, 세종학당, 중국 대학교 / 한국어 강의 / 교수 / 10년",
      "한국어 교원 2급",
    ],
  },
  {
    icon: Cpu,
    category: "분야 03",
    title: "AI 관련 교육 이수 및 향후 목표",
    items: [
      "빠르게 변화하는 시대에 맞춰 여러 자격증 취득",
      "AI 관련 교육 이수 및 AI 자격증 5~6종 취득",
      "향후 AI 교육 강사 및 학원 창업 희망",
    ],
  },
]

const journeySteps = [
  {
    step: "01",
    organization: "노량진 정진학원",
    role: "팀장",
    period: "10년",
    work: "입시 관리 및 강의",
  },
  {
    step: "02",
    organization: "이풀수학학원",
    role: "원장",
    period: "11년",
    work: "대치동 입시학원 운영 및 강의",
  },
  {
    step: "03",
    organization: "대구과학대, 세종학당, 중국 대학교",
    role: "교수",
    period: "10년",
    work: "한국어 강의",
  },
  {
    step: "04",
    organization: "자격증 취득 및 AI 관련 교육",
    role: "진행 및 목표",
    period: "현재 ~ 향후",
    work: "빠르게 변화하는 시대에 맞춰 여러 자격증 취득, AI 관련 교육 이수 및 AI 자격증 5~6종 취득",
  },
  {
    step: "05",
    organization: "향후 진로 목표",
    role: "희망 방향",
    period: "향후",
    work: "향후 AI 교육 강사 및 학원 창업 희망",
  },
]

const certificates = [
  "한국어 교원 2급",
  "정사서 2급",
  "장례지도사",
  "심리 상담사 1급",
  "자기주도학습 코칭 1급",
  "부동산 경매 자격증",
  "드론 3급",
  "선박 조종면허 및 대형, 화물, 택시 등 각종 운전 면허",
  "전기기사(예정)",
]

const capabilitiesList = [
  "입시 관리 및 강의",
  "대치동 입시학원 운영 및 강의",
  "한국어 강의",
  ...certificates,
  "AI 관련 교육 이수 및 AI 자격증 5~6종 취득",
]

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0c0d] text-[#e5e7eb] break-keep overflow-x-hidden">
      {/* 가) 맨 위 한 줄 소개 */}
      <header className="relative overflow-hidden border-b border-neutral-800/80 py-28 sm:py-36 md:py-44">
        {/* 맨 위 화면에 은은하게 움직이는 무늬 (색과 도형만 사용) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <motion.div
            className="absolute -inset-[10%] opacity-[0.14]"
            style={{
              backgroundImage:
                "radial-gradient(#a3e635 1px, transparent 1px), radial-gradient(#a3e635 1px, #0b0c0d 1px)",
              backgroundSize: "40px 40px",
              backgroundPosition: "0 0, 20px 20px",
            }}
            animate={{
              x: [0, 20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[340px] w-[340px] sm:h-[520px] sm:w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a3e635]/15"
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[220px] w-[220px] sm:h-[340px] sm:w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-800"
            animate={{
              scale: [1.04, 0.96, 1.04],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#a3e635]" />
              <Badge variant="default">가) 한 줄 소개</Badge>
            </div>

            <h1 className="text-[clamp(1.85rem,4.6vw,3.5rem)] font-black tracking-tight leading-[1.22] text-[#f3f4f6]">
              입시 관리·학원 운영 및 강의와{" "}
              <span className="text-[#a3e635]">한국어 강의</span> 경력을 바탕으로,
              빠르게 변화하는 시대에 맞춰 여러 자격증 취득과{" "}
              <span className="text-[#a3e635]">
                AI 관련 교육 이수 및 향후 AI 교육 강사·학원 창업
              </span>
              을 희망하는 교육자입니다.
            </h1>

            <p className="max-w-3xl text-base sm:text-lg text-neutral-300 leading-relaxed">
              노량진 정진학원(팀장, 10년) · 이풀수학학원(원장, 11년) · 대구과학대,
              세종학당, 중국 대학교(교수, 10년)
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                size="lg"
                onClick={() => scrollToSection("section-pillars")}
              >
                보여 줄 것 세 가지 보기
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("section-journey")}
              >
                걸어온 길
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("section-capabilities")}
              >
                할 수 있는 것
              </Button>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* 나) 보여 줄 것 세 가지 */}
        <motion.section
          id="section-pillars"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="py-24 sm:py-32"
        >
          <div className="space-y-3 mb-12">
            <Badge variant="default">나) 보여 줄 것 세 가지</Badge>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#f3f4f6]">
              할 수 있는 일 세 덩어리
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {threePillars.map((pillar) => {
              const IconComponent = pillar.icon
              return (
                <Card
                  key={pillar.title}
                  className="flex flex-col justify-between transition-colors hover:border-[#a3e635]/50"
                >
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#a3e635]/30 bg-[#a3e635]/10 text-[#a3e635]">
                        <IconComponent className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-bold tracking-tight text-[#a3e635]">
                        {pillar.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-black tracking-tight">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Separator className="mb-4" />
                    <ul className="space-y-2.5 text-sm sm:text-base text-neutral-300 leading-relaxed">
                      {pillar.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a3e635]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </motion.section>

        <Separator />

        {/* 다) 걸어온 길 */}
        <motion.section
          id="section-journey"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="py-24 sm:py-32"
        >
          <div className="space-y-3 mb-12">
            <Badge variant="default">다) 걸어온 길</Badge>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#f3f4f6]">
              직무경력 및 목표 흐름
            </h2>
          </div>

          <div className="space-y-4">
            {journeySteps.map((item) => (
              <Card
                key={item.step}
                className="transition-colors hover:border-[#a3e635]/50"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-4">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#a3e635]/40 bg-[#a3e635]/10 text-sm font-black text-[#a3e635]">
                        {item.step}
                      </span>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-black tracking-tight text-[#f3f4f6]">
                            {item.organization}
                          </h3>
                          <Badge variant="secondary">{item.role}</Badge>
                        </div>
                        <p className="text-sm sm:text-base text-neutral-300">
                          {item.work}
                        </p>
                      </div>
                    </div>

                    <div className="sm:text-right pl-13 sm:pl-0">
                      <Badge variant="default" className="text-xs sm:text-sm">
                        <Briefcase className="mr-1.5 h-3.5 w-3.5" />
                        {item.period}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <Separator />

        {/* 라) 할 수 있는 것 */}
        <motion.section
          id="section-capabilities"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="py-24 sm:py-32"
        >
          <div className="space-y-3 mb-12">
            <Badge variant="default">라) 할 수 있는 것</Badge>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#f3f4f6]">
              자격증 및 역량 나열
            </h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 text-[#a3e635]">
                  <Award className="h-5 w-5" />
                  <span className="text-sm font-bold">쉼표(,)로 나열한 전체 역량 및 자격증</span>
                </div>
                <CardTitle className="text-lg sm:text-xl font-black tracking-tight pt-1">
                  할 수 있는 것과 보유(예정 포함) 자격증
                </CardTitle>
                <CardDescription>
                  작성해 주신 직무경력, 자격증, 목표 내용을 그대로 쉼표로 나열했습니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="rounded-lg border border-neutral-800/90 bg-[#0b0c0d] p-5 text-base sm:text-lg leading-loose text-[#e5e7eb]">
                  {capabilitiesList.join(", ")}
                </p>

                <div className="space-y-3">
                  <div className="text-sm font-bold text-neutral-300">
                    자격증 목록 (원문 그대로)
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {certificates.map((cert) => (
                      <Badge
                        key={cert}
                        variant="secondary"
                        className="px-3 py-1.5 text-xs sm:text-sm border-neutral-800"
                      >
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#a3e635]" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <Target className="mt-1 h-5 w-5 shrink-0 text-[#a3e635]" />
                  <div className="space-y-1 text-sm sm:text-base text-neutral-300">
                    <div className="font-bold text-[#f3f4f6]">목표 (원문 그대로)</div>
                    <p>
                      빠르게 변화하는 시대에 맞춰 여러 자격증 취득, AI 관련 교육 이수 및 AI 자격증 5~6종 취득 , 향후 AI 교육 강사 및 학원 창업 희망
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-neutral-800/80 py-12">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#a3e635]" />
            <span>소개 웹페이지</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            맨 위로 이동
          </Button>
        </div>
      </footer>
    </div>
  )
}
