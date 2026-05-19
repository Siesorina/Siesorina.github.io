<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>电子信息工程自学指南</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=JetBrains+Mono:wght@400;600&family=Noto+Sans+SC:wght@300;400;500&display=swap');

  :root {
    --bg: #0d0f14;
    --surface: #13161e;
    --surface2: #1a1e2a;
    --border: #252a38;
    --accent: #4fc3f7;
    --accent2: #81c784;
    --accent3: #ffb74d;
    --accent4: #ce93d8;
    --text: #d4dce8;
    --text-dim: #7a8699;
    --text-bright: #eaf1fb;
    --red: #ef5350;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Noto Sans SC', sans-serif;
    font-weight: 300;
    line-height: 1.8;
    padding: 0 1rem 4rem;
  }

  /* ── Header ── */
  header {
    max-width: 860px;
    margin: 0 auto;
    padding: 4rem 0 2.5rem;
    border-bottom: 1px solid var(--border);
  }
  .tag-line {
    font-family: 'JetBrains Mono', monospace;
    font-size: .72rem;
    color: var(--accent);
    letter-spacing: .2em;
    text-transform: uppercase;
    margin-bottom: .8rem;
  }
  h1 {
    font-family: 'Noto Serif SC', serif;
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 700;
    color: var(--text-bright);
    line-height: 1.3;
  }
  .subtitle {
    margin-top: .6rem;
    color: var(--text-dim);
    font-size: .9rem;
  }

  /* ── Layout ── */
  main {
    max-width: 860px;
    margin: 0 auto;
  }

  /* ── Section headers ── */
  .section {
    margin-top: 3rem;
  }
  .section-header {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 1.2rem;
  }
  .section-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: .7rem;
    color: var(--accent);
    letter-spacing: .15em;
    white-space: nowrap;
  }
  h2 {
    font-family: 'Noto Serif SC', serif;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-bright);
    border-bottom: 1px solid var(--border);
    padding-bottom: .4rem;
    flex: 1;
  }

  h3 {
    font-size: .95rem;
    font-weight: 500;
    color: var(--accent3);
    margin: 1.4rem 0 .5rem;
    font-family: 'JetBrains Mono', monospace;
    letter-spacing: .05em;
  }

  /* ── Path diagram ── */
  .path {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: .4rem;
    margin: 1rem 0 1.5rem;
    padding: 1rem 1.2rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 6px;
  }
  .path-node {
    background: var(--surface2);
    border: 1px solid var(--accent);
    color: var(--accent);
    font-family: 'JetBrains Mono', monospace;
    font-size: .78rem;
    padding: .25rem .7rem;
    border-radius: 4px;
    white-space: nowrap;
  }
  .path-arrow {
    color: var(--text-dim);
    font-size: .9rem;
  }

  /* ── Cards ── */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
    margin-top: .8rem;
  }
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1rem 1.1rem;
    transition: border-color .2s;
  }
  .card:hover { border-color: var(--accent); }
  .card-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: .78rem;
    font-weight: 600;
    color: var(--accent2);
    margin-bottom: .4rem;
  }
  .card p {
    font-size: .85rem;
    color: var(--text-dim);
    line-height: 1.7;
  }

  /* ── Table ── */
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: .85rem;
    margin-top: .8rem;
  }
  th {
    font-family: 'JetBrains Mono', monospace;
    font-size: .7rem;
    letter-spacing: .1em;
    color: var(--accent);
    text-transform: uppercase;
    text-align: left;
    padding: .5rem .8rem;
    border-bottom: 1px solid var(--border);
  }
  td {
    padding: .55rem .8rem;
    border-bottom: 1px solid var(--border);
    color: var(--text);
    vertical-align: top;
  }
  tr:hover td { background: var(--surface); }
  td:first-child {
    font-family: 'JetBrains Mono', monospace;
    color: var(--accent4);
    white-space: nowrap;
  }
  td:nth-child(2) { color: var(--text-bright); font-weight: 400; }

  /* ── Steps ── */
  .steps { margin-top: .8rem; }
  .step {
    display: flex;
    gap: .9rem;
    margin-bottom: .7rem;
    align-items: flex-start;
  }
  .step-num {
    flex-shrink: 0;
    width: 1.6rem;
    height: 1.6rem;
    background: var(--accent);
    color: var(--bg);
    font-family: 'JetBrains Mono', monospace;
    font-size: .72rem;
    font-weight: 600;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: .1rem;
  }
  .step-body { font-size: .88rem; color: var(--text); }
  .step-body strong { color: var(--text-bright); font-weight: 500; }

  /* ── Callout ── */
  .callout {
    margin-top: 1.5rem;
    padding: .9rem 1.1rem;
    border-left: 3px solid var(--red);
    background: color-mix(in srgb, var(--red) 6%, var(--surface));
    border-radius: 0 6px 6px 0;
    font-size: .85rem;
    color: var(--text);
  }
  .callout.tip { border-color: var(--accent2); background: color-mix(in srgb, var(--accent2) 6%, var(--surface)); }
  .callout strong { color: var(--text-bright); }

  /* ── Chip tags ── */
  .tags { display: flex; flex-wrap: wrap; gap: .4rem; margin-top: .6rem; }
  .chip {
    font-family: 'JetBrains Mono', monospace;
    font-size: .72rem;
    padding: .18rem .55rem;
    border-radius: 3px;
    background: var(--surface2);
    border: 1px solid var(--border);
    color: var(--text-dim);
  }

  /* ── Footer ── */
  footer {
    max-width: 860px;
    margin: 3rem auto 0;
    border-top: 1px solid var(--border);
    padding-top: 1rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: .72rem;
    color: var(--text-dim);
    text-align: right;
  }

  a { color: var(--accent); text-decoration: none; }
  a:hover { text-decoration: underline; }

  p { margin-bottom: .5rem; }
  p:last-child { margin-bottom: 0; }
</style>
</head>
<body>

<header>
  <div class="tag-line">// Self-learning Guide · EE / CSer</div>
  <h1>电子信息工程<br>自学路线整合</h1>
  <p class="subtitle">从零开始 → 基础 → 核心 → 进阶 &nbsp;·&nbsp; 理论 × 实操 × 逆向</p>
</header>

<main>

  <!-- ① 学习顺序 -->
  <section class="section">
    <div class="section-header">
      <span class="section-num">01 /</span>
      <h2>推荐学习顺序</h2>
    </div>
    <p>电路分析是模电与数电的共同地基，先把它打牢，后续学习才不会"发疯"。</p>
    <div class="path">
      <span class="path-node">电路分析</span>
      <span class="path-arrow">→</span>
      <span class="path-node">模拟电子技术</span>
      <span class="path-arrow">→</span>
      <span class="path-node">数字电子技术</span>
      <span class="path-arrow">→</span>
      <span class="path-node">C 语言 / 编程</span>
      <span class="path-arrow">→</span>
      <span class="path-node">MCU 实战</span>
      <span class="path-arrow">→</span>
      <span class="path-node">信号与系统</span>
      <span class="path-arrow">→</span>
      <span class="path-node">PCB 设计</span>
      <span class="path-arrow">→</span>
      <span class="path-node">FPGA / IC（选修）</span>
    </div>
    <p style="font-size:.85rem;color:var(--text-dim)">C 语言可以在电路分析之后并行学习，不必严格串行。FPGA 方向在掌握数电后按需点亮。</p>
  </section>

  <!-- ② 书籍与视频 -->
  <section class="section">
    <div class="section-header">
      <span class="section-num">02 /</span>
      <h2>核心资源</h2>
    </div>

    <h3>📖 书籍</h3>
    <table>
      <thead>
        <tr><th>书名</th><th>作者 / 说明</th><th>适用阶段</th></tr>
      </thead>
      <tbody>
        <tr><td>《电路分析基础》</td><td>汪建等，清华大学出版社。内容通俗，入门首选</td><td>基础</td></tr>
        <tr><td>《模拟电子技术基础》</td><td>童诗白编著，国内经典"红宝书"</td><td>基础</td></tr>
        <tr><td>《数字电子技术基础》</td><td>阎石编著，逻辑门到时序电路必读</td><td>基础</td></tr>
        <tr><td>《The Art of Electronics》</td><td>英文神书，时间紧只看前5章也够用</td><td>基础↑</td></tr>
        <tr><td>《编码 Code》</td><td>展示从继电器到 CPU 的构建思路，建立直觉</td><td>通识</td></tr>
        <tr><td>《实用电子元器件与电路基础》</td><td>百科全书式工具书，查阅常备</td><td>工具书</td></tr>
        <tr><td>《数字设计和计算机体系结构》</td><td>逻辑门 → RISC-V 全链路打通</td><td>进阶</td></tr>
        <tr><td>《信号与系统》</td><td>重点：时域/频域关系、FFT 频谱分析</td><td>进阶</td></tr>
        <tr><td>《FPGA 深度解析》</td><td>樊继明等，RTL 编写到布局布线实例讲解</td><td>选修</td></tr>
      </tbody>
    </table>

    <h3>🎬 视频课</h3>
    <div class="card-grid">
      <div class="card">
        <div class="card-title">清华 · 电子技术基础</div>
        <p>B站 BV1Et411W7v7，涵盖数电/模电/实验，体系完整，推荐系统学习</p>
      </div>
      <div class="card">
        <div class="card-title">Crash Course Physics/Engineering</div>
        <p>B站均有搬运，快速建立物理直觉，英语友好，适合热身</p>
      </div>
      <div class="card">
        <div class="card-title">Sky · 数字IC/FPGA 合集</div>
        <p>B站 BV17z4y1D7S9，从入门到精通，自学进阶首选</p>
      </div>
      <div class="card">
        <div class="card-title">B站 · 硬件茶谈</div>
        <p>国内硬件科普标杆，讲解深入浅出，适合碎片化学习</p>
      </div>
      <div class="card">
        <div class="card-title">YouTube · NorthridgeFix</div>
        <p>实机维修逆向拆解，看大神如何追踪故障，实战感极强</p>
      </div>
      <div class="card">
        <div class="card-title">iFixit 拆解手册</div>
        <p>网站资源，各类设备拆解图文，逆向改装参考必备</p>
      </div>
    </div>
  </section>

  <!-- ③ 仿真与工具 -->
  <section class="section">
    <div class="section-header">
      <span class="section-num">03 /</span>
      <h2>仿真软件与必备工具</h2>
    </div>

    <h3>🖥️ 仿真软件</h3>
    <table>
      <thead><tr><th>软件</th><th>用途</th></tr></thead>
      <tbody>
        <tr><td>Multisim / Proteus</td><td>模拟电路仿真，观察电流电压波形，买元件前先验证</td></tr>
        <tr><td>Falstad (CircuitJS)</td><td>网页端，动态电流可视化，零门槛快速实验</td></tr>
        <tr><td>Logisim-evolution</td><td>数字逻辑设计，从逻辑门手搭 CPU</td></tr>
        <tr><td>立创 EDA</td><td>原理图 + PCB 绘制，每月 2 次免费打板 (10×10cm)</td></tr>
        <tr><td>Altium Designer / Cadence</td><td>工业级 EDA，进阶 PCB 与 IC 设计主流工具</td></tr>
        <tr><td>MATLAB / Python</td><td>信号建模与频谱分析，配合《信号与系统》使用</td></tr>
      </tbody>
    </table>

    <h3>🔧 实体工具</h3>
    <div class="card-grid">
      <div class="card">
        <div class="card-title">恒温焊台</div>
        <p>T12 或白光系列，精确控温防止烫坏 PCB 与元件</p>
      </div>
      <div class="card">
        <div class="card-title">数字万用表</div>
        <p>电压/电流测量及通路测试，最高频使用的仪器</p>
      </div>
      <div class="card">
        <div class="card-title">稳压电源</div>
        <p>设置电流限制，安全上电，防止新板子第一次就"冒烟"</p>
      </div>
      <div class="card">
        <div class="card-title">示波器</div>
        <p>进阶必备，抓取信号波形、调试通信时序，USB 小型款即可入门</p>
      </div>
    </div>
  </section>

  <!-- ④ 动手体系 -->
  <section class="section">
    <div class="section-header">
      <span class="section-num">04 /</span>
      <h2>动手实操体系</h2>
    </div>

    <h3>▶ 入门练手</h3>
    <div class="steps">
      <div class="step"><div class="step-num">1</div><div class="step-body"><strong>焊接套件</strong>：买无线话筒或收音机散件套装，焊接并调试，最快速建立手感与元件认知</div></div>
      <div class="step"><div class="step-num">2</div><div class="step-body"><strong>面包板实验</strong>：用 74 系列逻辑芯片手搭加法器，亲身理解高低电平与逻辑运算</div></div>
      <div class="step"><div class="step-num">3</div><div class="step-body"><strong>仿真先行</strong>：在购买元件之前，先在仿真软件中验证电路原理，省钱且高效</div></div>
      <div class="step"><div class="step-num">4</div><div class="step-body"><strong>Arduino 入门</strong>：学习 GPIO、PWM、I2C/SPI 等基础通信协议，点灯、驱动舵机、读传感器</div></div>
      <div class="step"><div class="step-num">5</div><div class="step-body"><strong>STM32 进阶</strong>：竞赛主流平台，把 PWM/DMA/I2C 等外设模块逐一吃透；需要 WiFi/蓝牙则转 ESP32</div></div>
      <div class="step"><div class="step-num">6</div><div class="step-body"><strong>立创 EDA 打板</strong>：自己画原理图和 PCB，白嫖每月免费打板名额，从设计到实物完整走一遍</div></div>
    </div>

    <h3>▶ 逆向工程四步法（以改装闹钟/旧设备为例）</h3>
    <div class="steps">
      <div class="step"><div class="step-num">①</div><div class="step-body"><strong>观察走线</strong>：找 VCC/GND，用万用表通路测试推导原理图</div></div>
      <div class="step"><div class="step-num">②</div><div class="step-body"><strong>识别总线</strong>：数屏幕连线数量，判断段码屏还是 I2C/SPI，确定通信协议</div></div>
      <div class="step"><div class="step-num">③</div><div class="step-body"><strong>追踪按键</strong>：定位按键焊点对应的芯片引脚，用示波器或逻辑分析仪观察信号</div></div>
      <div class="step"><div class="step-num">④</div><div class="step-body"><strong>查阅 Datasheet</strong>：拍下芯片型号丝印，搜索 PDF 手册，了解引脚功能与时序</div></div>
    </div>
    <p style="font-size:.85rem;color:var(--text-dim);margin-top:.6rem">改装进阶：找出原主控引脚后，用 ESP32 或 STM32 接管信号，实现"老树发新芽"；注意在 EDA 里复刻外壳尺寸，确保螺丝孔与接口完全对位。</p>
  </section>

  <!-- ⑤ MCU & 信号 -->
  <section class="section">
    <div class="section-header">
      <span class="section-num">05 /</span>
      <h2>微控制器与信号分析</h2>
    </div>

    <h3>MCU 选型建议</h3>
    <table>
      <thead><tr><th>平台</th><th>定位</th><th>学习重点</th></tr></thead>
      <tbody>
        <tr><td>51 单片机</td><td>可选入门，适合极简硬件直觉建立</td><td>GPIO、定时器、UART，做循迹小车等小项目</td></tr>
        <tr><td>STM32</td><td>竞赛与项目主流</td><td>HAL 库 + PWM/DMA/I2C/SPI，吃透每个外设</td></tr>
        <tr><td>ESP32</td><td>IoT / 远程控制首选</td><td>WiFi + 蓝牙，智能家居、远程灯控等场景</td></tr>
        <tr><td>Arduino</td><td>快速验证想法</td><td>生态丰富，适合原型开发与学习通信协议</td></tr>
      </tbody>
    </table>

    <h3>信号分析</h3>
    <p style="font-size:.88rem">学习《信号与系统》，重点掌握<strong style="color:var(--text-bright)">时域与频域的关系</strong>以及 FFT 频谱分析；用 MATLAB 或 Python（NumPy/SciPy）对采集到的信号数据进行建模与可视化，两者结合事半功倍。</p>

    <h3>C 语言重点</h3>
    <div class="tags">
      <span class="chip">指针</span><span class="chip">结构体</span><span class="chip">联合体</span>
      <span class="chip">链表 / 栈 / 队列</span><span class="chip">冒泡 / 堆排序</span>
      <span class="chip">底层驱动编写</span><span class="chip">RTOS（进阶）</span>
    </div>
    <p style="font-size:.85rem;color:var(--text-dim);margin-top:.6rem">掌握指针与数据结构是写高质量嵌入式代码的基础，比学新语言更重要。</p>
  </section>

  <!-- ⑥ 进阶与项目 -->
  <section class="section">
    <div class="section-header">
      <span class="section-num">06 /</span>
      <h2>进阶项目参考</h2>
    </div>
    <p style="font-size:.88rem;margin-bottom:.8rem">进阶阶段的核心是<strong style="color:var(--text-bright)">以项目驱动学习</strong>：系统设计 → 原理图 → PCB 布线 → 打板 → 程序编写 → 调试，走完全流程。</p>

    <div class="card-grid">
      <div class="card">
        <div class="card-title">MCU 综合项目</div>
        <p>循迹小车、智能窗户控制、门禁系统（刷卡/密码）、感应灯、智能家居中控（ESP32）</p>
      </div>
      <div class="card">
        <div class="card-title">信号/通信项目</div>
        <p>CAN 总线数据监听器、串口协议分析仪、蓝牙/WiFi 数据透传模块</p>
      </div>
      <div class="card">
        <div class="card-title">FPGA 项目（选修）</div>
        <p>半加器/全加器、计数器、串行通信接口（I2C/SPI/UART）、异步 FIFO、流水线简单 CPU</p>
      </div>
      <div class="card">
        <div class="card-title">逆向改装项目</div>
        <p>老闹钟换 ESP32 内核、旧音响加蓝牙模块、二手设备改装远程控制</p>
      </div>
    </div>

    <p style="font-size:.85rem;color:var(--text-dim);margin-top:1rem">竞赛参考：全国大学生电子设计竞赛（电赛）、RoboMaster、集成电路创新创业大赛。</p>
  </section>

  <!-- ⑦ 安全提醒 -->
  <section class="section">
    <div class="section-header">
      <span class="section-num">07 /</span>
      <h2>安全与学习心态</h2>
    </div>

    <div class="callout">
      <strong>⚠️ 安全提醒</strong><br>
      动手前务必了解<strong>电容放电</strong>的重要性——大容量电容即使断电后仍可蓄积危险电压。拆解含有电解电容的设备时，先放电再操作。稳压电源务必设置电流限制，防止短路损坏设备或引发安全事故。
    </div>

    <div class="callout tip" style="margin-top:.8rem">
      <strong>💡 学习心态</strong><br>
      电子信息工程的学习不是一朝一夕的事，难免在学电路过程中"发疯"——这很正常。坚持<strong>理论 → 仿真 → 实操 → 总结错误</strong>的闭环，每一个被烧掉的元件都是宝贵的学费。You can do it yourself ∠(・ω&lt; )⌒☆
    </div>
  </section>

</main>

<footer>
  整合自知乎多位作者 · 硅屿 / 华东子 / 孙卫等 &nbsp;|&nbsp; 仅供学习参考
</footer>

</body>
</html>