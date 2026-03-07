/* ============================================
   宜路科技 YILU Technology - Interactive Scripts
   ============================================ */

/* === Language Toggle System === */
let currentLang = localStorage.getItem('yilu-lang') || 'zh';

const TYPING_PHRASES = {
    zh: ['堅不可摧的', '安全可靠的', '高效智能的', '值得信賴的'],
    en: ['Unbreakable', 'Reliable & Resilient', 'AI-Powered', 'Trusted']
};

const TRANSLATIONS = {
    zh: {
        // Nav
        'nav-home': '首頁',
        'nav-about': '關於我們',
        'nav-services': '服務項目',
        'nav-dell': 'Dell 產品',
        'nav-security': '資安服務',
        'nav-why': '為何選擇我們',
        'nav-contact': '聯絡我們',
        'nav-cta': '免費諮詢',
        // Hero
        'hero-badge': 'Dell Technologies 授權合作夥伴',
        'hero-line1': '為企業打造',
        'hero-line2': '堅不可摧的',
        'hero-line3': 'IT 基礎架構與資安防線',
        'hero-desc': '宜路科技整合 Dell Technologies 全方位企業級產品，攜手 CrowdStrike、KnowBe4、SecurityScorecard<br>三大頂尖資安品牌，提供從基礎建設到資安防護的一站式專業服務。',
        'hero-btn1': '立即諮詢方案',
        'hero-btn2': '瞭解我們的服務',
        'stat-label1': '企業客戶信賴',
        'stat-label2': '服務滿意度',
        'stat-label3': '全天候技術支援',
        'stat-label4': '國際品牌合作',
        'hero-scroll': '向下捲動',
        // About
        'about-tag': 'About Us',
        'about-title': '關於宜路科技',
        'about-desc': '以專業技術與豐富經驗，成為企業最信賴的 IT 夥伴',
        'about-h3': '企業數位轉型的最佳推手',
        'about-p1': '<strong>宜路科技有限公司 (YILU Technology Co., LTD)</strong> 總部位於台北市中山區，是一家專注於企業 IT 基礎架構建設與資訊安全的專業系統整合商。我們的團隊由具備多項國際技術認證的資深工程師組成，深耕資訊科技領域，致力於為台灣各產業客戶提供量身打造的 IT 解決方案。',
        'about-p2': '身為 Dell Technologies 授權合作夥伴，我們能提供涵蓋 PowerEdge 伺服器、PowerStore/PowerScale 儲存、企業網路設備、Precision 工作站到 Latitude 商用筆電的全方位產品線。同時，我們策略性地整合全球資安領導品牌 —— CrowdStrike Falcon 端點防護平台、KnowBe4 資安意識培訓、以及 SecurityScorecard 供應鏈風險管理，為企業建構從端點到供應鏈的完整資安防護體系。',
        'about-f1-h': '原廠授權認證',
        'about-f1-p': 'Dell Technologies 授權合作夥伴，確保原廠品質與服務',
        'about-f2-h': '專業認證團隊',
        'about-f2-p': '工程師持有 Dell、CrowdStrike 等多項國際技術認證',
        'about-f3-h': '即時技術支援',
        'about-f3-p': '快速回應的在地化售後服務與技術諮詢',
        'about-f4-h': '一站式整合服務',
        'about-f4-p': '從規劃、採購、部署到維運的全生命週期管理',
        // Network nodes
        'node1': '系統整合',
        'node2': '資安防護',
        'node3': '雲端架構',
        'node4': '技術顧問',
        // Services
        'services-tag': 'Our Services',
        'services-title': '專業服務項目',
        'services-desc': '從硬體基礎建設到資安防護體系，一站式滿足企業所有 IT 需求',
        'svc1-h3': 'IT 基礎架構規劃與建置',
        'svc1-p': '從需求分析到架構設計，提供企業級 IT 基礎設施的完整規劃與建置服務。',
        'svc1-li1': '資料中心伺服器規劃與部署',
        'svc1-li2': '企業儲存架構設計 (SAN/NAS)',
        'svc1-li3': '虛擬化環境建置 (VMware/Hyper-V)',
        'svc1-li4': '網路架構規劃與交換器部署',
        'svc2-h3': '企業資安防護服務',
        'svc2-p': '整合全球頂尖資安品牌，打造從端點到供應鏈的多層次防禦體系。',
        'svc2-li1': '端點偵測與回應 (EDR/XDR)',
        'svc2-li2': '資安意識培訓與社交工程演練',
        'svc2-li3': '供應鏈風險評估與持續監控',
        'svc2-li4': '資安事件應變與數位鑑識',
        'svc3-h3': 'IT 策略顧問與諮詢',
        'svc3-p': '提供專業的 IT 策略規劃與技術顧問，協助企業制定最佳數位轉型路線。',
        'svc3-li1': 'IT 架構現況評估與優化建議',
        'svc3-li2': '資安合規諮詢 (ISO 27001 等)',
        'svc3-li3': 'IT 採購規劃與成本效益分析',
        'svc3-li4': '雲端遷移策略與混合雲規劃',
        'svc4-h3': '維運管理與技術支援',
        'svc4-p': '專業團隊提供全方位維運服務，確保系統穩定運行與最佳營運效率。',
        'svc4-li1': '7x24 系統監控與告警管理',
        'svc4-li2': '故障排除與緊急修復服務',
        'svc4-li3': '韌體更新與軟硬體升級',
        'svc4-li4': '定期健檢報告與效能優化',
        // Dell
        'dell-tag': 'Dell Technologies Partner',
        'dell-title': 'Dell Technologies 全系列企業級產品',
        'dell-desc': '身為 Dell Technologies 授權合作夥伴，我們提供最完整的企業級 IT 產品線',
        'dell-s1-h3': 'Dell PowerEdge 伺服器',
        'dell-s1-sub': '驅動企業創新的運算核心',
        'dell-c1-badge': 'AI 優化',
        'dell-c1-h4': 'AI 伺服器',
        'dell-c1-p': '專為人工智慧、生成式 AI (GenAI) 及高效能運算 (HPC) 打造，配備先進 GPU 加速，搭載最新 Intel Xeon 處理器。',
        'dell-c2-badge': '核心運算',
        'dell-c2-h4': '資料中心伺服器',
        'dell-c2-p': '提供卓越效能、能源效率與網路韌性，支援現代化資料中心的各種業務需求，可靠的基礎設施降低成本並無縫擴展。',
        'dell-c3-badge': '邊際運算',
        'dell-c3-h4': '邊際伺服器',
        'dell-c3-p': '高效能邊際伺服器，專為資料密集型工作負載設計，在任何邊際位置提供可擴展、高效且安全的運算效能。',
        'dell-s2-h3': 'Dell 企業級儲存方案',
        'dell-s2-sub': '全球企業外部儲存市場第一品牌',
        'dell-c4-h4': 'PowerStore',
        'dell-c4-p': '統一式全快閃企業儲存，專為多元化工作負載設計。支援 VM、資料庫、容器及一般檔案存取，提供彈性擴展與不中斷現代化升級。',
        'dell-c5-h4': 'PowerScale',
        'dell-c5-p': '統一式檔案與物件儲存，具備平行處理效能。最適合非結構化資料的大規模存取，支援 NFS、SMB、S3 多協定，為 AI 與資料密集型工作負載而生。',
        'dell-c6-h4': 'PowerProtect',
        'dell-c6-p': '業界最受信賴的資料保護平台，建構網路韌性的基石。最適合各種規模組織的關鍵業務工作負載，提供最高效能與安全性。',
        'dell-c7-h4': 'PowerVault',
        'dell-c7-p': '經濟實惠的 Block 儲存方案，專為中小型或特定工作負載最佳化。適合 PowerEdge 伺服器容量擴充、邊際環境及 VDI 工作負載。',
        'dell-s3-h3': '網路、工作站與商用電腦',
        'dell-s3-sub': '完整的企業端到端解決方案',
        'dell-c8-h4': 'Dell 網路交換器',
        'dell-c8-p': '企業級網路交換器，為資料中心、校園網路及邊際環境提供高速、穩定、安全的網路基礎設施。',
        'dell-c9-h4': 'Precision 工作站',
        'dell-c9-p': '專為工程師、建築師、資料科學家打造的高效能工作站。提供塔式、行動及機架式機型，支援最嚴苛的專業運算需求。',
        'dell-c10-h4': 'Latitude / OptiPlex 商用電腦',
        'dell-c10-p': 'Latitude 商用筆電兼顧輕薄行動力與企業安全管理；OptiPlex 桌機以精巧設計打造高效辦公環境，含 Micro、Small Form Factor 等多種機型。',
        'dell-c11-h4': 'UltraSharp 顯示器與周邊',
        'dell-c11-p': 'Dell UltraSharp 專業顯示器提供精準色彩與護眼技術，搭配 Docking Station、鍵鼠等周邊，打造完整高效辦公體驗。',
        // Security
        'sec-tag': 'Cybersecurity Solutions',
        'sec-title': '頂尖資安解決方案',
        'sec-desc': '攜手全球資安領導品牌，為企業建構從端點到供應鏈的完整數位防線',
        'cs-desc': '全球領先的雲原生端點防護平台 —— CrowdStrike Falcon。透過 AI 驅動的單一輕量級 Agent，提供即時威脅偵測、自動化回應與跨域可視性。MITRE ATT&CK 評估實現 <strong>100% 偵測覆蓋率</strong>，平均為安全團隊每週節省 <strong>40+ 小時</strong>作業時間。',
        'cs-btn': '諮詢 CrowdStrike 方案',
        'kb4-desc': '全球最大的資安意識培訓與模擬社交工程平台。根據統計，<strong>68% 的資安事件包含人為因素</strong>，KnowBe4 透過持續性培訓與模擬釣魚測試，平均將組織的易受釣魚比例從 <strong>30% 降至 5% 以下</strong>。支援 <strong>35 種語言</strong>，擁有全球最大的培訓內容庫。',
        'kb4-btn': '諮詢 KnowBe4 方案',
        'ssc-desc': '業界首創供應鏈偵測與回應 (SCDR) 解決方案。SecurityScorecard 透過安全評級與持續監控，協助企業識別第三方及第四方供應鏈風險。在 <strong>48 小時內</strong>偵測並回應零日威脅，將問題解決時間縮短 <strong>90%</strong>，降低第三方資安事件達 <strong>75%</strong>。',
        'ssc-btn': '諮詢 SecurityScorecard 方案',
        'approach-h3': '宜路科技的資安防護策略',
        'approach-p': '四階段打造企業全方位資安防禦體系',
        'step1-h4': '風險評估',
        'step1-p': '全面盤點企業 IT 資產，透過 SecurityScorecard 評級了解現況風險，制定優先處置計畫。',
        'step2-h4': '端點防護部署',
        'step2-p': '導入 CrowdStrike Falcon 平台，建立 AI 驅動的端點偵測、回應與威脅獵捕能力。',
        'step3-h4': '人員培訓強化',
        'step3-p': '透過 KnowBe4 建立持續性資安意識培訓計畫，降低社交工程攻擊成功率。',
        'step4-h4': '持續監控優化',
        'step4-p': '建立 7x24 監控機制，定期檢視安全態勢，持續優化防護策略因應最新威脅。',
        // Why Us
        'why-tag': 'Why Choose Us',
        'why-title': '為什麼選擇宜路科技？',
        'why-desc': '我們不只是供應商，更是企業長期的 IT 策略夥伴',
        'why1-h3': '原廠授權保障',
        'why1-p': 'Dell Technologies 授權合作夥伴，所有產品皆為原廠正品，享有完整原廠保固與技術支援。',
        'why2-h3': '一站式整合服務',
        'why2-p': '從硬體採購、資安部署到維運管理，提供完整生命週期服務，讓企業專注核心業務。',
        'why3-h3': '頂尖資安生態系',
        'why3-p': '策略整合 CrowdStrike、KnowBe4、SecurityScorecard 三大國際品牌，覆蓋端點、人員、供應鏈。',
        'why4-h3': '在地化專業團隊',
        'why4-p': '台灣在地團隊，快速回應無時差。工程師持有多項國際認證，深刻理解在地企業需求。',
        'why5-h3': '量身打造方案',
        'why5-p': '不推銷不需要的產品，根據企業規模、產業特性與預算，提供最適合的客製化方案。',
        'why6-h3': '持續售後支援',
        'why6-p': '導入只是開始。提供完善的教育訓練、定期健檢、效能優化與持續技術諮詢服務。',
        // Industries
        'ind-tag': 'Industries',
        'ind-title': '產業應用場景',
        'ind-desc': '跨產業的專業經驗，為不同領域打造量身定制的 IT 解決方案',
        'ind1-h3': '金融與保險',
        'ind1-p': '符合金管會資安規範，部署端點防護與資安意識培訓，保護客戶資料與交易安全。',
        'ind2-h3': '科技與製造',
        'ind2-p': '建置高效能運算環境與 AI 伺服器，保護智慧財產權，確保生產線不中斷運作。',
        'ind3-h3': '醫療與生技',
        'ind3-p': '保護病患隱私資料 (PHI)，建置符合醫療資安標準的 IT 基礎架構與資料備份方案。',
        'ind4-h3': '教育與研究',
        'ind4-p': '為校園與研究機構提供高效能運算叢集、大規模儲存與網路安全防護方案。',
        'ind5-h3': '政府與公部門',
        'ind5-p': '符合政府資安等級分類，提供通過認證的安全解決方案與在地化技術支援。',
        'ind6-h3': '零售與電商',
        'ind6-p': '保護線上交易與客戶資料，建置高可用性的電商基礎架構與 DDoS 防護。',
        // FAQ
        'faq-tag': 'FAQ',
        'faq-title': '常見問題',
        'faq-desc': '關於我們的服務，您可能想了解的問題',
        'faq1-q': '宜路科技提供哪些品牌的產品？',
        'faq1-a': '我們是 Dell Technologies 授權合作夥伴，提供 Dell 全系列企業級產品，包含 PowerEdge 伺服器、PowerStore/PowerScale/PowerProtect/PowerVault 儲存、Precision 工作站、Latitude 商用筆電、OptiPlex 桌機、網路交換器及 UltraSharp 顯示器。資安方面，我們代理 CrowdStrike、KnowBe4 與 SecurityScorecard 三大國際品牌。',
        'faq2-q': '我的企業規模不大，也適合使用這些資安解決方案嗎？',
        'faq2-a': '當然適合。CrowdStrike、KnowBe4 與 SecurityScorecard 都提供彈性的授權方案，可依企業規模與預算靈活調整。我們會根據您的實際需求，推薦最適合且最具成本效益的方案組合，而非一味推銷高階產品。',
        'faq3-q': '從諮詢到完成部署大約需要多長時間？',
        'faq3-a': '視專案規模而定。單純的產品採購通常 1-2 週即可到貨部署；中型的資安解決方案導入約 2-4 週；大型的 IT 基礎架構整體規劃與建置則需 1-3 個月。我們會在初步評估後提供明確的時程規劃。',
        'faq4-q': '你們提供哪些售後服務與技術支援？',
        'faq4-a': '我們提供完善的售後服務體系：包含系統監控與告警管理、故障排除與緊急修復、韌體更新與軟硬體升級、定期健檢報告與效能優化建議。同時，Dell 原廠保固與各資安品牌的技術支援管道也由我們協助對接，確保問題快速解決。',
        'faq5-q': 'CrowdStrike 與傳統防毒軟體有什麼不同？',
        'faq5-a': '傳統防毒依賴病毒碼比對，只能防範已知威脅。CrowdStrike Falcon 是雲原生、AI 驅動的端點防護平台，透過行為分析即時偵測未知威脅與零日攻擊。單一輕量級 Agent 即可提供 NGAV 防毒、EDR 偵測回應、威脅獵捕等功能，在 MITRE ATT&CK 評估中實現 100% 偵測覆蓋率。',
        'faq6-q': '如何開始與宜路科技合作？',
        'faq6-a': '非常簡單！您可以透過本頁的聯絡表單、撥打電話 (02) 2585-0055、或寄送 Email 至 info@yilutech.com 聯繫我們。我們會安排專業顧問與您進行初步需求訪談（免費），了解您的現況與目標後，提供量身打造的解決方案建議書。',
        // Partners
        'partners-h3': '策略合作夥伴',
        'partners-sub': '攜手全球領先品牌，為台灣企業提供世界級的 IT 解決方案',
        // Testimonials
        'test-tag': 'Testimonials',
        'test-title': '客戶怎麼說',
        'test-desc': '來自各產業客戶的真實回饋',
        'test1-text': '"宜路科技協助我們導入 CrowdStrike Falcon 平台，從評估到部署只花了兩週。導入後成功攔截多次進階威脅攻擊，IT 團隊的資安事件處理時間縮短了 60%。"',
        'test1-name': '陳先生',
        'test1-role': '某金融控股公司 資安長',
        'test2-text': '"從 Dell PowerEdge 伺服器採購到 PowerStore 儲存部署，宜路科技展現了極高的專業度。一站式服務讓我們不需要對接多家廠商，大幅降低溝通成本。"',
        'test2-name': '林經理',
        'test2-role': '某科技製造公司 IT 主管',
        'test3-text': '"KnowBe4 資安意識培訓導入三個月後，我們的釣魚演練點擊率從 28% 降到 4%。宜路科技團隊還定期協助我們分析報告，持續優化培訓策略。"',
        'test3-name': '王總監',
        'test3-role': '某醫療機構 資訊部總監',
        'test4-text': '"SecurityScorecard 讓我們第一次真正看清供應鏈的資安風險。宜路科技不只賣產品，更像是我們的外部資安顧問，隨時提供專業建議。"',
        'test4-name': '張處長',
        'test4-role': '某上市公司 資訊處長',
        // CTA
        'cta-h2': '準備好強化企業的 IT 基礎架構與資安防護了嗎？',
        'cta-p': '無論是 Dell 伺服器採購規劃、資安解決方案評估，或是完整 IT 策略諮詢，<br>宜路科技的專業團隊都能為您提供最佳建議。',
        'cta-btn1': '免費諮詢',
        'cta-btn2': 'Email 聯繫',
        // Contact
        'contact-tag': 'Contact Us',
        'contact-title': '聯絡我們',
        'contact-desc': '歡迎與我們聯繫，讓專業團隊為您規劃最佳解決方案',
        'contact-h3': '宜路科技有限公司',
        'contact-addr-label': '公司地址',
        'contact-addr-val': '臺北市中山區農安街4號4樓',
        'contact-phone-label': '聯絡電話',
        'contact-email-label': '電子信箱',
        'contact-hours-label': '營業時間',
        'contact-hours-val': '週一至週五 09:00 - 18:00',
        'contact-quick-h4': '快速諮詢',
        'ql1': 'Dell 產品採購',
        'ql2': 'CrowdStrike 端點防護',
        'ql3': 'KnowBe4 資安培訓',
        'ql4': 'SecurityScorecard 風險管理',
        'ql5': 'IT 架構規劃',
        'ql6': '資安合規諮詢',
        'form-name-label': '姓名 *',
        'form-name-ph': '請輸入您的姓名',
        'form-company-label': '公司名稱',
        'form-company-ph': '請輸入公司名稱',
        'form-email-label': '電子信箱 *',
        'form-email-ph': '請輸入電子信箱',
        'form-phone-label': '聯絡電話',
        'form-phone-ph': '請輸入聯絡電話',
        'form-service-label': '需求類型',
        'form-msg-label': '需求說明 *',
        'form-msg-ph': '請描述您的需求，例如：公司規模、目前 IT 環境、預期目標等，我們將盡快回覆',
        'form-submit': '送出諮詢',
        // Footer
        'footer-logo-name': '宜路科技',
        'footer-desc': '專業可靠的系統整合商，整合 Dell Technologies 全方位產品與頂尖資安品牌，為企業打造堅不可摧的 IT 基礎架構與資安防線。',
        'footer-col1-h4': '服務項目',
        'footer-l1-1': 'IT 基礎架構建置',
        'footer-l1-2': '企業資安防護',
        'footer-l1-3': 'IT 策略顧問',
        'footer-l1-4': '維運技術支援',
        'footer-col2-h4': '產品與品牌',
        'footer-col3-h4': '聯絡資訊',
        'footer-copy': '© 2025 宜路科技有限公司 YILU Technology Co., LTD. All rights reserved.',
        'footer-reg': '統一編號：90898596 | 代表人：謝雲龍',
        // Search
        'search-ph': '搜尋服務，例如：伺服器、資安、AI...',
        'search-hot': '熱門搜尋',
        // Floating
        'float-phone': '撥打電話',
        'float-email': '發送 Email',
        'float-line': 'LINE 聯繫',
        'float-form': '諮詢表單',
        // About Achievements
        'ach1': '年業界深耕',
        'ach2': '企業客戶信賴',
        'ach3': '成功導入專案',
        'ach4': '國際品牌授權',
    },
    en: {
        // Nav
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-services': 'Services',
        'nav-dell': 'Dell Products',
        'nav-security': 'Cybersecurity',
        'nav-why': 'Why Us',
        'nav-contact': 'Contact',
        'nav-cta': 'Free Consultation',
        // Hero
        'hero-badge': 'Dell Technologies Authorized Partner',
        'hero-line1': 'Building',
        'hero-line2': 'Unbreakable',
        'hero-line3': 'IT Infrastructure & Cybersecurity',
        'hero-desc': 'YILU Technology integrates Dell Technologies enterprise products with world-class cybersecurity brands CrowdStrike, KnowBe4 &amp; SecurityScorecard,<br>delivering one-stop professional IT &amp; security services.',
        'hero-btn1': 'Get a Consultation',
        'hero-btn2': 'Explore Our Services',
        'stat-label1': 'Enterprise Clients',
        'stat-label2': 'Satisfaction Rate',
        'stat-label3': '24/7 Tech Support',
        'stat-label4': 'Global Brand Partners',
        'hero-scroll': 'Scroll Down',
        // About
        'about-tag': 'About Us',
        'about-title': 'About YILU Technology',
        'about-desc': 'Your most trusted IT partner — backed by expertise and deep industry experience',
        'about-h3': 'The Catalyst for Enterprise Digital Transformation',
        'about-p1': '<strong>YILU Technology Co., LTD</strong> is headquartered in Zhongshan District, Taipei. We are a professional system integrator focused on enterprise IT infrastructure and information security. Our team of senior engineers holds multiple international certifications, committed to delivering tailored IT solutions to clients across industries in Taiwan.',
        'about-p2': 'As a Dell Technologies Authorized Partner, we provide a full lineup including PowerEdge servers, PowerStore/PowerScale storage, enterprise networking, Precision workstations, and Latitude laptops. We strategically integrate leading cybersecurity brands — CrowdStrike Falcon, KnowBe4, and SecurityScorecard — to build a comprehensive security posture from endpoint to supply chain.',
        'about-f1-h': 'OEM Authorized',
        'about-f1-p': 'Dell Technologies Authorized Partner — guaranteed authentic products and factory-level support',
        'about-f2-h': 'Certified Team',
        'about-f2-p': 'Engineers hold multiple international certifications from Dell, CrowdStrike, and more',
        'about-f3-h': 'Rapid Tech Support',
        'about-f3-p': 'Fast-response local after-sales service and technical consulting',
        'about-f4-h': 'One-Stop Service',
        'about-f4-p': 'Full lifecycle management from planning, procurement, deployment to operations',
        // Network nodes
        'node1': 'System Integration',
        'node2': 'Cybersecurity',
        'node3': 'Cloud Architecture',
        'node4': 'IT Consulting',
        // Services
        'services-tag': 'Our Services',
        'services-title': 'Professional Services',
        'services-desc': 'From hardware infrastructure to cybersecurity — one-stop solutions for all enterprise IT needs',
        'svc1-h3': 'IT Infrastructure Planning & Deployment',
        'svc1-p': 'End-to-end planning and deployment of enterprise-grade IT infrastructure, from requirements analysis to architecture design.',
        'svc1-li1': 'Data center server planning & deployment',
        'svc1-li2': 'Enterprise storage architecture (SAN/NAS)',
        'svc1-li3': 'Virtualization environment (VMware/Hyper-V)',
        'svc1-li4': 'Network architecture & switch deployment',
        'svc2-h3': 'Enterprise Cybersecurity Services',
        'svc2-p': 'Integrating world-class security brands to build a multi-layered defense from endpoint to supply chain.',
        'svc2-li1': 'Endpoint Detection & Response (EDR/XDR)',
        'svc2-li2': 'Security awareness training & phishing simulations',
        'svc2-li3': 'Supply chain risk assessment & monitoring',
        'svc2-li4': 'Incident response & digital forensics',
        'svc3-h3': 'IT Strategy Consulting',
        'svc3-p': 'Expert IT strategy planning and technical consulting to help enterprises define the best digital transformation roadmap.',
        'svc3-li1': 'IT architecture assessment & optimization',
        'svc3-li2': 'Security compliance consulting (ISO 27001, etc.)',
        'svc3-li3': 'IT procurement planning & cost-benefit analysis',
        'svc3-li4': 'Cloud migration strategy & hybrid cloud planning',
        'svc4-h3': 'Managed Operations & Tech Support',
        'svc4-p': 'Professional team delivering comprehensive managed services to ensure system stability and peak operational efficiency.',
        'svc4-li1': '7x24 system monitoring & alerting',
        'svc4-li2': 'Troubleshooting & emergency repair',
        'svc4-li3': 'Firmware updates & hardware/software upgrades',
        'svc4-li4': 'Periodic health checks & performance optimization',
        // Dell
        'dell-tag': 'Dell Technologies Partner',
        'dell-title': 'Dell Technologies Full Enterprise Lineup',
        'dell-desc': 'As a Dell Technologies Authorized Partner, we offer the most complete enterprise IT product portfolio',
        'dell-s1-h3': 'Dell PowerEdge Servers',
        'dell-s1-sub': 'The compute core driving enterprise innovation',
        'dell-c1-badge': 'AI Optimized',
        'dell-c1-h4': 'AI Servers',
        'dell-c1-p': 'Purpose-built for AI, Generative AI (GenAI), and HPC workloads. Equipped with advanced GPU acceleration and the latest Intel Xeon processors.',
        'dell-c2-badge': 'Core Compute',
        'dell-c2-h4': 'Data Center Servers',
        'dell-c2-p': 'Delivering outstanding performance, energy efficiency, and network resilience to support modern data center operations with reliable, scalable infrastructure.',
        'dell-c3-badge': 'Edge Computing',
        'dell-c3-h4': 'Edge Servers',
        'dell-c3-p': 'High-performance edge servers designed for data-intensive workloads, providing scalable, efficient, and secure computing at any edge location.',
        'dell-s2-h3': 'Dell Enterprise Storage Solutions',
        'dell-s2-sub': '#1 external storage brand in the global enterprise market',
        'dell-c4-h4': 'PowerStore',
        'dell-c4-p': 'Unified all-flash enterprise storage designed for diverse workloads. Supports VMs, databases, containers, and general file access with flexible scaling and non-disruptive upgrades.',
        'dell-c5-h4': 'PowerScale',
        'dell-c5-p': 'Unified file and object storage with parallel processing performance. Ideal for large-scale unstructured data with NFS, SMB, S3 multi-protocol support — built for AI workloads.',
        'dell-c6-h4': 'PowerProtect',
        'dell-c6-p': "The industry's most trusted data protection platform and the cornerstone of cyber resilience. Optimized for mission-critical workloads of all sizes with maximum performance and security.",
        'dell-c7-h4': 'PowerVault',
        'dell-c7-p': 'Cost-effective block storage optimized for SMB or specific workloads. Ideal for PowerEdge capacity expansion, edge environments, and VDI workloads.',
        'dell-s3-h3': 'Networking, Workstations & Commercial PCs',
        'dell-s3-sub': 'A complete enterprise end-to-end solution',
        'dell-c8-h4': 'Dell Network Switches',
        'dell-c8-p': 'Enterprise-grade network switches delivering high-speed, stable, and secure networking for data centers, campus networks, and edge environments.',
        'dell-c9-h4': 'Precision Workstations',
        'dell-c9-p': 'High-performance workstations built for engineers, architects, and data scientists. Available in tower, mobile, and rack form factors for the most demanding professional computing.',
        'dell-c10-h4': 'Latitude / OptiPlex Commercial PCs',
        'dell-c10-p': 'Latitude business laptops balance thin portability with enterprise security management; OptiPlex desktops deliver efficient office performance in compact designs including Micro and SFF models.',
        'dell-c11-h4': 'UltraSharp Monitors & Peripherals',
        'dell-c11-p': 'Dell UltraSharp professional monitors offer precise color accuracy and eye-care technology. Paired with docking stations and accessories for a complete, productive workspace.',
        // Security
        'sec-tag': 'Cybersecurity Solutions',
        'sec-title': 'World-Class Cybersecurity Solutions',
        'sec-desc': 'Partnering with global security leaders to build a complete digital defense from endpoint to supply chain',
        'cs-desc': "The world's leading cloud-native endpoint protection platform — CrowdStrike Falcon. A single lightweight AI-driven Agent delivers real-time threat detection, automated response, and cross-domain visibility. Achieved <strong>100% detection coverage</strong> in MITRE ATT&CK evaluations, saving security teams <strong>40+ hours per week</strong> on average.",
        'cs-btn': 'Inquire About CrowdStrike',
        'kb4-desc': "The world's largest security awareness training and simulated social engineering platform. With <strong>68% of breaches involving human error</strong>, KnowBe4 reduces an organization's phish-prone percentage from <strong>30% to under 5%</strong> through continuous training. Supports <strong>35 languages</strong> with the world's largest content library.",
        'kb4-btn': 'Inquire About KnowBe4',
        'ssc-desc': "The industry's first Supply Chain Detection & Response (SCDR) solution. SecurityScorecard uses security ratings and continuous monitoring to help enterprises identify third and fourth-party supply chain risks. Detect and respond to zero-day threats <strong>within 48 hours</strong>, reduce remediation time by <strong>90%</strong>, and decrease third-party incidents by <strong>75%</strong>.",
        'ssc-btn': 'Inquire About SecurityScorecard',
        'approach-h3': "YILU Technology's Cybersecurity Strategy",
        'approach-p': 'A 4-phase approach to building comprehensive enterprise cyber defense',
        'step1-h4': 'Risk Assessment',
        'step1-p': 'Conduct a full IT asset inventory and use SecurityScorecard ratings to understand current risk posture and prioritize remediation.',
        'step2-h4': 'Endpoint Protection',
        'step2-p': 'Deploy CrowdStrike Falcon to establish AI-driven endpoint detection, response, and threat hunting capabilities.',
        'step3-h4': 'People Training',
        'step3-p': 'Use KnowBe4 to build a continuous security awareness training program and reduce social engineering susceptibility.',
        'step4-h4': 'Continuous Monitoring',
        'step4-p': 'Establish 24/7 monitoring, regularly review security posture, and continuously optimize defenses against emerging threats.',
        // Why Us
        'why-tag': 'Why Choose Us',
        'why-title': 'Why Choose YILU Technology?',
        'why-desc': "We're not just a vendor — we're your long-term IT strategy partner",
        'why1-h3': 'Authorized OEM Assurance',
        'why1-p': 'As a Dell Technologies Authorized Partner, all products are genuine with full factory warranty and technical support.',
        'why2-h3': 'One-Stop Integrated Service',
        'why2-p': 'From hardware procurement and security deployment to managed operations — complete lifecycle services so you can focus on your core business.',
        'why3-h3': 'Elite Security Ecosystem',
        'why3-p': 'Strategically integrated CrowdStrike, KnowBe4, and SecurityScorecard — covering endpoint, people, and supply chain.',
        'why4-h3': 'Local Expert Team',
        'why4-p': 'Taiwan-based team with instant response and no time-zone lag. Engineers hold multiple international certifications with deep understanding of local enterprise needs.',
        'why5-h3': 'Tailored Solutions',
        'why5-p': "We don't oversell. Solutions are tailored to your company size, industry, and budget for maximum value.",
        'why6-h3': 'Ongoing After-Sales Support',
        'why6-p': 'Deployment is just the beginning. We provide training, periodic health checks, performance optimization, and continuous technical consulting.',
        // Industries
        'ind-tag': 'Industries',
        'ind-title': 'Industry Applications',
        'ind-desc': 'Cross-industry expertise delivering tailored IT solutions for diverse sectors',
        'ind1-h3': 'Finance & Insurance',
        'ind1-p': 'Comply with financial regulatory requirements, deploy endpoint protection and security awareness training to safeguard client data.',
        'ind2-h3': 'Technology & Manufacturing',
        'ind2-p': 'Build high-performance compute environments with AI servers, protect intellectual property, and ensure uninterrupted production.',
        'ind3-h3': 'Healthcare & Biotech',
        'ind3-p': 'Protect patient PHI data, build healthcare-compliant IT infrastructure and data backup solutions.',
        'ind4-h3': 'Education & Research',
        'ind4-p': 'Provide HPC clusters, large-scale storage, and network security solutions for campuses and research institutions.',
        'ind5-h3': 'Government & Public Sector',
        'ind5-p': 'Comply with government security classification standards, delivering certified security solutions with local technical support.',
        'ind6-h3': 'Retail & E-commerce',
        'ind6-p': 'Protect online transactions and customer data, build high-availability e-commerce infrastructure with DDoS protection.',
        // FAQ
        'faq-tag': 'FAQ',
        'faq-title': 'Frequently Asked Questions',
        'faq-desc': 'Common questions about our services',
        'faq1-q': 'What brands does YILU Technology offer?',
        'faq1-a': "We are a Dell Technologies Authorized Partner, offering Dell's full enterprise lineup including PowerEdge servers, PowerStore/PowerScale/PowerProtect/PowerVault storage, Precision workstations, Latitude laptops, OptiPlex desktops, network switches, and UltraSharp monitors. On the security side, we represent CrowdStrike, KnowBe4, and SecurityScorecard.",
        'faq2-q': 'Are these security solutions suitable for smaller companies?',
        'faq2-a': 'Absolutely. CrowdStrike, KnowBe4, and SecurityScorecard all offer flexible licensing that scales with your company size and budget. We recommend the most cost-effective combination for your actual needs — never oversell.',
        'faq3-q': 'How long does it take from consultation to deployment?',
        'faq3-a': 'It depends on project scope. Simple product procurement typically takes 1-2 weeks; mid-sized security deployments take 2-4 weeks; large-scale IT infrastructure projects may take 1-3 months. We provide a clear timeline after the initial assessment.',
        'faq4-q': 'What after-sales services do you provide?',
        'faq4-a': 'We offer comprehensive after-sales support including system monitoring & alerting, troubleshooting & emergency repairs, firmware & software upgrades, and periodic health check reports. We also coordinate Dell factory warranty and security brand technical support channels.',
        'faq5-q': 'How is CrowdStrike different from traditional antivirus?',
        'faq5-a': 'Traditional antivirus relies on signature matching and can only defend against known threats. CrowdStrike Falcon is a cloud-native, AI-driven endpoint protection platform that detects unknown threats and zero-day attacks through behavioral analysis. A single lightweight Agent provides NGAV, EDR, and threat hunting — achieving 100% detection coverage in MITRE ATT&CK evaluations.',
        'faq6-q': 'How do I get started with YILU Technology?',
        'faq6-a': "It's simple! Contact us via the form on this page, call (02) 2585-0055, or email info@yilutech.com. We'll schedule a free initial consultation with a professional advisor to understand your current environment and goals, then provide a tailored solution proposal.",
        // Partners
        'partners-h3': 'Strategic Partners',
        'partners-sub': 'Partnering with global leaders to deliver world-class IT solutions to Taiwan enterprises',
        // Testimonials
        'test-tag': 'Testimonials',
        'test-title': 'What Our Clients Say',
        'test-desc': 'Real feedback from clients across industries',
        'test1-text': '"YILU Technology helped us deploy the CrowdStrike Falcon platform in just two weeks. After deployment, we successfully blocked multiple advanced threat attacks, and our IT team\'s security incident response time was reduced by 60%."',
        'test1-name': 'Mr. Chen',
        'test1-role': 'CISO, Financial Holding Company',
        'test2-text': '"From Dell PowerEdge server procurement to PowerStore storage deployment, YILU demonstrated exceptional expertise. Their one-stop service eliminated the need to coordinate multiple vendors, significantly reducing communication overhead."',
        'test2-name': 'Manager Lin',
        'test2-role': 'IT Manager, Technology Manufacturing Company',
        'test3-text': '"Three months after deploying KnowBe4 security awareness training, our phishing simulation click rate dropped from 28% to 4%. YILU\'s team also regularly helps us analyze reports and continuously optimize our training strategy."',
        'test3-name': 'Director Wang',
        'test3-role': 'IT Director, Medical Institution',
        'test4-text': '"SecurityScorecard gave us our first real visibility into supply chain cybersecurity risks. YILU is not just selling products — they act as our external security advisor, always ready with expert guidance."',
        'test4-name': 'Deputy Director Chang',
        'test4-role': 'IT Deputy Director, Listed Company',
        // CTA
        'cta-h2': 'Ready to Strengthen Your IT Infrastructure & Cybersecurity?',
        'cta-p': 'Whether it\'s Dell server procurement, security solution evaluation, or comprehensive IT strategy consulting,<br>the YILU Technology team is ready to provide the best guidance for you.',
        'cta-btn1': 'Free Consultation',
        'cta-btn2': 'Email Us',
        // Contact
        'contact-tag': 'Contact Us',
        'contact-title': 'Contact Us',
        'contact-desc': "Let's connect — our expert team will design the best solution for your needs",
        'contact-h3': 'YILU Technology Co., LTD',
        'contact-addr-label': 'Address',
        'contact-addr-val': '4F, No. 4, Nong-an St., Zhongshan Dist., Taipei City',
        'contact-phone-label': 'Phone',
        'contact-email-label': 'Email',
        'contact-hours-label': 'Business Hours',
        'contact-hours-val': 'Mon–Fri 09:00 – 18:00',
        'contact-quick-h4': 'Quick Inquiry',
        'ql1': 'Dell Products',
        'ql2': 'CrowdStrike EDR',
        'ql3': 'KnowBe4 Training',
        'ql4': 'SecurityScorecard',
        'ql5': 'IT Architecture',
        'ql6': 'Security Compliance',
        'form-name-label': 'Name *',
        'form-name-ph': 'Enter your name',
        'form-company-label': 'Company',
        'form-company-ph': 'Enter your company name',
        'form-email-label': 'Email *',
        'form-email-ph': 'Enter your email address',
        'form-phone-label': 'Phone',
        'form-phone-ph': 'Enter your phone number',
        'form-service-label': 'Inquiry Type',
        'form-msg-label': 'Message *',
        'form-msg-ph': 'Please describe your needs — e.g., company size, current IT environment, expected goals. We will respond shortly.',
        'form-submit': 'Send Inquiry',
        // Footer
        'footer-logo-name': 'YILU Technology',
        'footer-desc': 'A reliable system integrator combining Dell Technologies and elite cybersecurity brands to build unbreakable IT infrastructure and digital defenses for enterprises.',
        'footer-col1-h4': 'Services',
        'footer-l1-1': 'IT Infrastructure',
        'footer-l1-2': 'Cybersecurity',
        'footer-l1-3': 'IT Consulting',
        'footer-l1-4': 'Managed Support',
        'footer-col2-h4': 'Products & Brands',
        'footer-col3-h4': 'Contact Info',
        'footer-copy': '© 2025 YILU Technology Co., LTD. All rights reserved.',
        'footer-reg': 'Tax ID: 90898596 | Representative: Yun-Lung Hsieh',
        // Search
        'search-ph': 'Search services, e.g.: server, security, AI...',
        'search-hot': 'Popular Searches',
        // Floating
        'float-phone': 'Call Us',
        'float-email': 'Send Email',
        'float-line': 'LINE Message',
        'float-form': 'Contact Form',
        // About Achievements
        'ach1': 'Years of Expertise',
        'ach2': 'Enterprise Clients',
        'ach3': 'Projects Completed',
        'ach4': 'Global Brands',
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const ua = navigator.userAgent || '';
    const isIOSDevice = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (isIOSDevice) {
        document.documentElement.classList.add('is-ios');
    }

    // === Preloader with Staggered Content Reveal ===
    const preloader = document.getElementById('preloader');
    function hidePreloader() {
        preloader.classList.add('hidden');
        // Trigger staggered content reveal after preloader hides
        setTimeout(() => {
            document.body.classList.add('page-loaded');
        }, 200);
    }
    window.addEventListener('load', () => {
        // Wait for SVG draw animation to complete, then hide
        setTimeout(hidePreloader, 1800);
    });
    // Fallback: hide preloader after 3.5s regardless
    setTimeout(hidePreloader, 3500);

    // === Navbar Scroll Effect ===
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function getNavbarHeight() {
        return navbar ? navbar.getBoundingClientRect().height : 80;
    }

    function syncAnchorOffset() {
        const extraSpacing = window.innerWidth <= 768 ? 18 : 12;
        const offset = Math.ceil(getNavbarHeight() + extraSpacing);
        document.documentElement.style.setProperty('--anchor-offset', `${offset}px`);
    }

    function getHashTarget(hash) {
        if (!hash || hash === '#') return null;
        try {
            return document.querySelector(hash);
        } catch {
            return null;
        }
    }

    function getTargetScrollTop(target) {
        const targetTop = target.getBoundingClientRect().top + window.scrollY;
        const offsetTop = targetTop - getNavbarHeight();
        return Math.max(0, Math.round(offsetTop));
    }

    function alignTargetIntoView(target) {
        target.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'auto'
        });
    }

    function smoothScrollToTarget(target, delay = 0) {
        const performScroll = () => {
            if (isIOSDevice) {
                // iOS Safari: native element alignment is more stable than computed scrollTo offsets.
                alignTargetIntoView(target);
                [240, 520, 900].forEach(ms => {
                    setTimeout(() => {
                        alignTargetIntoView(target);
                    }, ms);
                });
                return;
            }

            window.scrollTo({
                top: getTargetScrollTop(target),
                behavior: 'smooth'
            });

            [420, 900].forEach(ms => {
                setTimeout(() => {
                    const correctedTop = getTargetScrollTop(target);
                    if (Math.abs(window.scrollY - correctedTop) > 2) {
                        window.scrollTo({ top: correctedTop });
                    }
                }, ms);
            });
        };

        if (delay > 0) {
            setTimeout(performScroll, delay);
        } else {
            performScroll();
        }
    }

    function handleScroll() {
        const scrollY = window.scrollY;

        // Navbar background
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        syncAnchorOffset();

        // Active nav link
        const activationLine = getNavbarHeight() + 20;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionId = section.getAttribute('id');

            if (rect.top <= activationLine && rect.bottom > activationLine) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Back to top button
        const backToTop = document.getElementById('backToTop');
        if (scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', syncAnchorOffset);

    // === Mobile Navigation Toggle ===
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');

    function openMobileMenu() {
        navToggle.classList.add('active');
        navMenu.classList.add('active');
        if (navOverlay) navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    navToggle.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // Close on overlay click
    if (navOverlay) {
        navOverlay.addEventListener('click', closeMobileMenu);
    }

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // === Back to Top ===
    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // === Scroll-triggered Animations (AOS-like) ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, parseInt(delay));
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
        animationObserver.observe(el);
    });

    // === Counter Animation ===
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number, .ach-count');
                counters.forEach(counter => {
                    animateCounter(counter);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        counterObserver.observe(statsSection);
    }

    const achievementsSection = document.querySelector('.about-achievements');
    if (achievementsSection) {
        counterObserver.observe(achievementsSection);
    }

    function animateCounter(element) {
        const target = parseFloat(element.getAttribute('data-count'));
        const duration = 2000;
        const startTime = performance.now();
        const isDecimal = target % 1 !== 0;

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = target * easeOut;

            if (isDecimal) {
                element.textContent = current.toFixed(1);
            } else {
                element.textContent = Math.floor(current);
            }

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = isDecimal ? target.toFixed(1) : target;
            }
        }

        requestAnimationFrame(updateCounter);
    }

    // === Hero Particles ===
    const particlesContainer = document.getElementById('heroParticles');
    if (particlesContainer) {
        createParticles();
    }

    function createParticles() {
        const particleCount = 40;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 4 + 's';
            particle.style.animationDuration = (3 + Math.random() * 4) + 's';

            const size = 2 + Math.random() * 3;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';

            // Vary colors between primary and accent
            const colors = ['#0ea5e9', '#6366f1', '#38bdf8', '#818cf8'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];

            particlesContainer.appendChild(particle);
        }
    }

    // === Smooth Scroll for all anchor links ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hash = this.getAttribute('href');
            const target = getHashTarget(hash);
            if (target) {
                const fromMobileNav = window.innerWidth <= 768 && this.closest('#navMenu') !== null;

                if (isIOSDevice && !fromMobileNav) {
                    // Keep native hash scrolling on iOS for regular links.
                    return;
                }

                e.preventDefault();
                if (fromMobileNav) {
                    closeMobileMenu();
                }
                smoothScrollToTarget(target, fromMobileNav ? 360 : 0);
            }
        });
    });

    // === Contact Form Handler ===
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Animate button
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalHTML = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>發送中...</span><i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual endpoint)
            setTimeout(() => {
                submitBtn.innerHTML = '<span>已送出！我們將盡快回覆</span><i class="fas fa-check"></i>';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';

                // Reset form
                setTimeout(() => {
                    this.reset();
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // === Navbar link hover effect - subtle glow ===
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px rgba(14, 165, 233, 0.3)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });

    // === Card Tilt Effect (subtle) ===
    const tiltCards = document.querySelectorAll('.service-card, .dell-card, .security-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // === Typing effect for hero (optional enhancement) ===
    // The hero is already well-designed with static text, keeping it clean.

    // Parallax on hero-gradient removed: caused compositing/z-index artifacts on Safari
    // and was a contributing factor to sections being covered by the hero.

    // === Service Search System ===
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchSuggestions = document.getElementById('searchSuggestions');
    const searchBtn = document.getElementById('navSearchBtn');
    const searchClose = document.getElementById('searchClose');

    // Service data with keyword mappings
    const serviceData = [
        {
            title: 'IT 基礎架構規劃與建置',
            desc: '資料中心伺服器規劃、企業儲存架構、虛擬化環境、網路部署',
            icon: 'fas fa-server',
            iconClass: 'icon-infra',
            target: '#services',
            keywords: ['架設網站', '網站', 'website', '基礎架構', '架構', 'infrastructure', '建置', '伺服器規劃', '資料中心', 'data center', '儲存架構', 'SAN', 'NAS', '虛擬化', 'VMware', 'Hyper-V', '網路架構', '交換器', '部署']
        },
        {
            title: '企業資安防護服務',
            desc: '端點偵測回應 (EDR/XDR)、資安意識培訓、供應鏈風險監控',
            icon: 'fas fa-shield-halved',
            iconClass: 'icon-security',
            target: '#services',
            keywords: ['資安', '防駭', '防護', '安全', 'security', '端點', 'EDR', 'XDR', '社交工程', '鑑識', '事件應變', '防毒', '威脅']
        },
        {
            title: 'IT 策略顧問與諮詢',
            desc: 'IT 架構評估優化、資安合規諮詢、採購規劃、雲端遷移策略',
            icon: 'fas fa-laptop-code',
            iconClass: 'icon-consulting',
            target: '#services',
            keywords: ['顧問', '諮詢', 'consulting', '策略', '合規', 'ISO', 'ISO 27001', 'compliance', '評估', '優化建議', '採購', '雲端遷移', '混合雲', '系統優化', '優化', 'optimization']
        },
        {
            title: '維運管理與技術支援',
            desc: '7x24 系統監控、故障排除、韌體更新、定期健檢與效能優化',
            icon: 'fas fa-wrench',
            iconClass: 'icon-support',
            target: '#services',
            keywords: ['維運', '技術支援', 'support', '監控', '故障排除', '修復', '韌體', '升級', '健檢', '效能優化', '系統優化', '優化', '維護', 'maintenance']
        },
        {
            title: 'Dell PowerEdge 伺服器',
            desc: 'AI 伺服器、資料中心伺服器、邊際伺服器 — 企業運算核心',
            icon: 'fas fa-server',
            iconClass: 'icon-dell',
            target: '#dell',
            keywords: ['伺服器', 'server', 'PowerEdge', 'Dell', '機架式', '塔式', '資料中心', 'data center', '邊際', 'edge', 'R760', 'R660', 'XE9680']
        },
        {
            title: 'AI 伺服器與高效能運算',
            desc: '專為 AI/ML 訓練與推論打造，配備 GPU 加速的企業級伺服器',
            icon: 'fas fa-microchip',
            iconClass: 'icon-ai',
            target: '#dell',
            keywords: ['AI', '人工智慧', '智能', 'artificial intelligence', 'GenAI', '生成式', 'GPU', '機器學習', 'ML', 'HPC', '高效能運算', 'deep learning', '深度學習']
        },
        {
            title: 'Dell 企業級儲存方案',
            desc: 'PowerStore、PowerScale、PowerProtect、PowerVault 全系列',
            icon: 'fas fa-database',
            iconClass: 'icon-dell',
            target: '#dell',
            keywords: ['儲存', 'storage', 'PowerStore', 'PowerScale', 'PowerProtect', 'PowerVault', '快閃', '備份', 'backup', 'NAS', 'SAN', '物件儲存', '資料保護']
        },
        {
            title: '網路、工作站與商用電腦',
            desc: 'Dell 網路交換器、Precision 工作站、Latitude 筆電、OptiPlex 桌機',
            icon: 'fas fa-laptop',
            iconClass: 'icon-dell',
            target: '#dell',
            keywords: ['網路', 'network', '交換器', 'switch', '工作站', 'workstation', 'Precision', '筆電', 'laptop', 'Latitude', '桌機', 'desktop', 'OptiPlex', '顯示器', 'monitor', 'UltraSharp', '商用電腦', 'Docking']
        },
        {
            title: 'CrowdStrike 端點防護平台',
            desc: 'AI 驅動的 EDR/XDR 解決方案，100% MITRE 偵測覆蓋率',
            icon: 'fas fa-crosshairs',
            iconClass: 'icon-security',
            target: '#security',
            keywords: ['CrowdStrike', 'Falcon', '端點', 'endpoint', 'EDR', 'XDR', '防毒', 'NGAV', '威脅獵捕', '防駭', '駭客', 'hacking', '入侵', '資安防護', 'MITRE']
        },
        {
            title: 'KnowBe4 資安意識培訓',
            desc: '模擬釣魚演練與資安培訓平台，降低人為資安風險',
            icon: 'fas fa-user-shield',
            iconClass: 'icon-security',
            target: '#security',
            keywords: ['KnowBe4', '培訓', 'training', '釣魚', 'phishing', '社交工程', '資安意識', '演練', '教育訓練', '人為風險']
        },
        {
            title: 'SecurityScorecard 供應鏈風險管理',
            desc: '供應鏈偵測與回應 (SCDR)、第三方風險評估、安全評級',
            icon: 'fas fa-chart-line',
            iconClass: 'icon-security',
            target: '#security',
            keywords: ['SecurityScorecard', '供應鏈', 'supply chain', 'SCDR', '風險', 'risk', '評級', 'rating', '第三方', '監控', 'TPRM', '攻擊面']
        }
    ];

    function openSearch() {
        searchOverlay.classList.add('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchSuggestions.style.display = '';
        document.body.style.overflow = 'hidden';
        setTimeout(() => searchInput.focus(), 100);
    }

    function closeSearch() {
        searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
        searchInput.value = '';
    }

    function performSearch(query) {
        const trimmed = query.trim().toLowerCase();
        if (!trimmed) {
            searchResults.innerHTML = '';
            searchSuggestions.style.display = '';
            return;
        }

        searchSuggestions.style.display = 'none';

        // Score each service by keyword match relevance
        const scored = serviceData.map(item => {
            let score = 0;
            const titleLower = item.title.toLowerCase();
            const descLower = item.desc.toLowerCase();

            // Check title match
            if (titleLower.includes(trimmed)) score += 10;

            // Check description match
            if (descLower.includes(trimmed)) score += 5;

            // Check keyword matches
            for (const kw of item.keywords) {
                const kwLower = kw.toLowerCase();
                if (kwLower === trimmed) {
                    score += 20; // exact match
                } else if (kwLower.includes(trimmed) || trimmed.includes(kwLower)) {
                    score += 8; // partial match
                }
            }

            return { ...item, score };
        });

        const matches = scored.filter(item => item.score > 0).sort((a, b) => b.score - a.score);

        if (matches.length === 0) {
            searchResults.innerHTML = `
                <div class="search-no-results">
                    <i class="fas fa-magnifying-glass"></i>
                    <p>找不到「${escapeHtml(query.trim())}」相關的服務</p>
                    <p class="search-no-results-hint">試試其他關鍵字，如：伺服器、資安、AI、儲存</p>
                </div>
            `;
            return;
        }

        let html = `<p class="search-section-label">搜尋結果 (${matches.length})</p>`;
        for (const item of matches) {
            html += `
                <a href="${item.target}" class="search-result-item" data-target="${item.target}">
                    <div class="search-result-icon ${item.iconClass}">
                        <i class="${item.icon}"></i>
                    </div>
                    <div class="search-result-info">
                        <div class="search-result-title">${highlightMatch(item.title, query.trim())}</div>
                        <div class="search-result-desc">${item.desc}</div>
                    </div>
                    <i class="fas fa-arrow-right search-result-arrow"></i>
                </a>
            `;
        }
        searchResults.innerHTML = html;

        // Bind click events on results
        searchResults.querySelectorAll('.search-result-item').forEach(el => {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('data-target'));
                if (target) {
                    closeSearch();
                    setTimeout(() => {
                        smoothScrollToTarget(target);
                    }, 200);
                }
            });
        });
    }

    function highlightMatch(text, query) {
        if (!query) return escapeHtml(text);
        const escaped = escapeHtml(text);
        const queryEscaped = escapeRegExp(query);
        const regex = new RegExp(`(${queryEscaped})`, 'gi');
        return escaped.replace(regex, '<mark style="background:rgba(14,165,233,0.25);color:var(--primary-light);border-radius:2px;padding:0 1px;">$1</mark>');
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Event listeners
    searchBtn.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);

    searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) closeSearch();
    });

    searchInput.addEventListener('input', function() {
        performSearch(this.value);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            closeSearch();
        }
        // Ctrl/Cmd + K to open search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (searchOverlay.classList.contains('active')) {
                closeSearch();
            } else {
                openSearch();
            }
        }
    });

    // Search tag buttons
    document.querySelectorAll('.search-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const query = this.getAttribute('data-query');
            searchInput.value = query;
            performSearch(query);
        });
    });

    // === Testimonials Slider ===
    const testimonialsTrack = document.getElementById('testimonialsTrack');
    const testimonialPrev = document.getElementById('testimonialPrev');
    const testimonialNext = document.getElementById('testimonialNext');
    const testimonialsDots = document.getElementById('testimonialsDots');

    if (testimonialsTrack && testimonialPrev && testimonialNext) {
        const cards = testimonialsTrack.querySelectorAll('.testimonial-card');
        let currentSlide = 0;
        const isMobile = () => window.innerWidth < 768;
        const slidesPerView = () => isMobile() ? 1 : 2;
        const totalSlides = () => Math.max(cards.length - slidesPerView() + 1, 1);

        function buildDots() {
            testimonialsDots.innerHTML = '';
            for (let i = 0; i < totalSlides(); i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === currentSlide) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(i));
                testimonialsDots.appendChild(dot);
            }
        }

        function goToSlide(index) {
            currentSlide = Math.max(0, Math.min(index, totalSlides() - 1));
            const cardWidth = cards[0].offsetWidth + 24; // gap
            testimonialsTrack.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
            const dots = testimonialsDots.querySelectorAll('.dot');
            dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
        }

        testimonialPrev.addEventListener('click', () => goToSlide(currentSlide - 1));
        testimonialNext.addEventListener('click', () => goToSlide(currentSlide + 1));

        buildDots();
        window.addEventListener('resize', () => {
            buildDots();
            goToSlide(Math.min(currentSlide, totalSlides() - 1));
        });

        // Auto-play
        let autoPlay = setInterval(() => {
            goToSlide(currentSlide < totalSlides() - 1 ? currentSlide + 1 : 0);
        }, 5000);

        testimonialsTrack.closest('.testimonials-slider').addEventListener('mouseenter', () => clearInterval(autoPlay));
        testimonialsTrack.closest('.testimonials-slider').addEventListener('mouseleave', () => {
            autoPlay = setInterval(() => {
                goToSlide(currentSlide < totalSlides() - 1 ? currentSlide + 1 : 0);
            }, 5000);
        });
    }

    // === Floating Contact Button ===
    const floatingBtn = document.getElementById('floatingBtn');
    const floatingContact = floatingBtn ? floatingBtn.closest('.floating-contact') : null;

    if (floatingBtn && floatingContact) {
        floatingBtn.addEventListener('click', () => {
            floatingContact.classList.toggle('active');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!floatingContact.contains(e.target)) {
                floatingContact.classList.remove('active');
            }
        });

        // Close floating when clicking a floating option link
        floatingContact.querySelectorAll('.floating-option').forEach(opt => {
            opt.addEventListener('click', () => {
                floatingContact.classList.remove('active');
            });
        });
    }

    // === Scroll Progress Bar ===
    const scrollProgressBar = document.getElementById('scrollProgress');
    if (scrollProgressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            scrollProgressBar.style.width = scrollPercent + '%';
        }, { passive: true });
    }

    // === FAQ Accordion ===
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                // Close all
                faqItems.forEach(i => i.classList.remove('active'));
                // Toggle current
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // === Hero Typing Effect ===
    const heroTitleGradient = document.querySelector('.hero-title-gradient');
    if (heroTitleGradient) {
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150;

        function typeEffect() {
            const phrases = TYPING_PHRASES[currentLang];
            const currentPhrase = phrases[phraseIndex % phrases.length];

            if (isDeleting) {
                heroTitleGradient.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 80;
            } else {
                heroTitleGradient.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 150;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                typingSpeed = 2500; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 400; // Pause before next word
            }

            setTimeout(typeEffect, typingSpeed);
        }

        // Start typing after initial animation
        setTimeout(typeEffect, 3000);
    }

    // === Navbar Hide/Show on Scroll ===
    let lastScrollY = 0;
    let ticking = false;
    if (!isIOSDevice) {
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    if (currentScrollY > 600 && currentScrollY > lastScrollY + 5) {
                        navbar.style.transform = 'translateY(-100%)';
                    } else {
                        navbar.style.transform = 'translateY(0)';
                    }
                    lastScrollY = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    // === Back-to-Top Progress Ring ===
    const progressRing = document.getElementById('progressRing');
    if (progressRing) {
        const circumference = 2 * Math.PI * 20; // r=20
        progressRing.style.strokeDasharray = circumference;
        progressRing.style.strokeDashoffset = circumference;

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            const offset = circumference - (scrollPercent * circumference);
            progressRing.style.strokeDashoffset = offset;
        }, { passive: true });
    }

    // === Contact Form Real-time Validation ===
    if (contactForm) {
        const validators = {
            name: (v) => v.trim().length >= 2 ? '' : '請輸入至少 2 個字',
            email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : '請輸入有效的電子信箱',
            message: (v) => v.trim().length >= 10 ? '' : '請輸入至少 10 個字的需求說明'
        };

        Object.keys(validators).forEach(fieldName => {
            const field = contactForm.querySelector(`[name="${fieldName}"]`);
            if (!field) return;

            // Add error span if not exists
            let errorSpan = field.parentElement.querySelector('.form-error');
            if (!errorSpan) {
                errorSpan = document.createElement('span');
                errorSpan.className = 'form-error';
                field.parentElement.appendChild(errorSpan);
            }

            field.addEventListener('blur', function() {
                const error = validators[fieldName](this.value);
                const group = this.closest('.form-group');
                if (!this.value.trim()) {
                    group.classList.remove('valid', 'invalid');
                    errorSpan.textContent = '';
                } else if (error) {
                    group.classList.remove('valid');
                    group.classList.add('invalid');
                    errorSpan.textContent = error;
                } else {
                    group.classList.remove('invalid');
                    group.classList.add('valid');
                    errorSpan.textContent = '';
                }
            });

            field.addEventListener('input', function() {
                const group = this.closest('.form-group');
                if (group.classList.contains('invalid')) {
                    const error = validators[fieldName](this.value);
                    if (!error) {
                        group.classList.remove('invalid');
                        group.classList.add('valid');
                        errorSpan.textContent = '';
                    }
                }
            });
        });
    }

    // === Testimonials Touch Swipe ===
    if (testimonialsTrack) {
        let touchStartX = 0;
        let touchEndX = 0;
        const minSwipeDistance = 50;

        testimonialsTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        testimonialsTrack.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const distance = touchStartX - touchEndX;

            if (Math.abs(distance) >= minSwipeDistance) {
                if (distance > 0) {
                    // Swipe left -> next
                    document.getElementById('testimonialNext')?.click();
                } else {
                    // Swipe right -> prev
                    document.getElementById('testimonialPrev')?.click();
                }
            }
        }, { passive: true });
    }

    // === Cursor Glow Follower (Desktop Only) ===
    const cursorGlow = document.getElementById('cursorGlow');
    if (cursorGlow && window.matchMedia('(pointer: fine)').matches && window.innerWidth >= 1024) {
        // Track which dark sections enable glow
        const darkSections = document.querySelectorAll('.hero, .security, .why-us, .testimonials, .cta-section');
        let glowActive = false;
        let glowRaf = null;
        let mouseX = 0, mouseY = 0;

        function updateGlow() {
            cursorGlow.style.left = mouseX + 'px';
            cursorGlow.style.top = mouseY + 'px';
            glowRaf = null;
        }

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!glowRaf) {
                glowRaf = requestAnimationFrame(updateGlow);
            }

            // Check if cursor is over a dark section
            let overDark = false;
            for (const sec of darkSections) {
                const rect = sec.getBoundingClientRect();
                if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
                    overDark = true;
                    break;
                }
            }
            if (overDark && !glowActive) {
                cursorGlow.classList.add('visible');
                glowActive = true;
            } else if (!overDark && glowActive) {
                cursorGlow.classList.remove('visible');
                glowActive = false;
            }
        }, { passive: true });
    }

    // === Magnetic Hover Effect on CTA Buttons ===
    if (window.matchMedia('(pointer: fine)').matches) {
        const magneticBtns = document.querySelectorAll('.btn-primary, .nav-cta');
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                const strength = 0.2;
                this.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
            });

            btn.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                setTimeout(() => {
                    this.style.transition = '';
                }, 400);
            });
        });
    }

    // === Card Spotlight / Gradient Follow Effect (Stripe-style) ===
    if (window.matchMedia('(pointer: fine)').matches) {
        const spotlightCards = document.querySelectorAll('.service-card, .why-card, .industry-card, .dell-card');
        spotlightCards.forEach(card => {
            // Create spotlight element
            const spotlight = document.createElement('div');
            spotlight.className = 'card-spotlight';
            card.style.position = 'relative';
            card.style.overflow = 'hidden';
            card.appendChild(spotlight);

            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                spotlight.style.background = `radial-gradient(350px circle at ${x}px ${y}px, rgba(14, 165, 233, 0.06), transparent 60%)`;
            });
        });
    }

    // === Animated Security Approach Timeline on Scroll ===
    const approachSteps = document.querySelectorAll('.approach-step');
    const approachConnectors = document.querySelectorAll('.approach-connector');
    const approachProgressLine = document.getElementById('approachProgress');

    if (approachSteps.length > 0) {
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Stagger the steps
                    approachSteps.forEach((step, i) => {
                        setTimeout(() => {
                            step.classList.add('timeline-animate');
                        }, i * 300);
                    });

                    // Stagger the connectors
                    approachConnectors.forEach((conn, i) => {
                        setTimeout(() => {
                            conn.classList.add('timeline-animate');
                        }, (i + 1) * 300 + 150);
                    });

                    // Animate progress line
                    if (approachProgressLine) {
                        setTimeout(() => {
                            approachProgressLine.classList.add('timeline-animate');
                        }, 200);
                    }

                    timelineObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const approachSection = document.querySelector('.security-approach');
        if (approachSection) {
            timelineObserver.observe(approachSection);
        }
    }

    // === Section Title Text Reveal Animation (clip-path wipe) ===
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        const tag = header.querySelector('.section-tag');
        const title = header.querySelector('.section-title');
        const desc = header.querySelector('.section-desc');

        if (tag) tag.classList.add('section-tag-reveal');
        if (title) {
            // Wrap title text in a span for clip-path animation
            const titleText = title.innerHTML;
            title.innerHTML = `<span class="section-title-reveal">${titleText}</span>`;
        }
        if (desc) desc.classList.add('section-desc-reveal');
    });

    const titleRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tag = entry.target.querySelector('.section-tag-reveal');
                const titleSpan = entry.target.querySelector('.section-title-reveal');
                const desc = entry.target.querySelector('.section-desc-reveal');

                if (tag) {
                    setTimeout(() => tag.classList.add('revealed'), 100);
                }
                if (titleSpan) {
                    setTimeout(() => titleSpan.classList.add('revealed'), 250);
                }
                if (desc) {
                    setTimeout(() => desc.classList.add('revealed'), 500);
                }

                titleRevealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sectionHeaders.forEach(header => {
        titleRevealObserver.observe(header);
    });

    // === Navbar Sliding Pill Active Indicator ===
    const navPill = document.getElementById('navPill');
    if (navPill && window.innerWidth >= 769) {
        function updateNavPill() {
            const activeLink = document.querySelector('.nav-link.active');
            if (activeLink) {
                const linkRect = activeLink.getBoundingClientRect();
                const menuRect = navPill.parentElement.getBoundingClientRect();
                const left = linkRect.left - menuRect.left;
                const width = linkRect.width;
                navPill.style.left = left + 'px';
                navPill.style.width = width + 'px';
                navPill.classList.add('visible');
            }
        }

        // Update pill on scroll (active link changes)
        const pillScrollHandler = () => {
            requestAnimationFrame(updateNavPill);
        };
        window.addEventListener('scroll', pillScrollHandler, { passive: true });

        // Update pill on nav link hover
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                const linkRect = this.getBoundingClientRect();
                const menuRect = navPill.parentElement.getBoundingClientRect();
                navPill.style.left = (linkRect.left - menuRect.left) + 'px';
                navPill.style.width = linkRect.width + 'px';
                navPill.classList.add('visible');
            });
        });

        const navMenuEl = document.getElementById('navMenu');
        if (navMenuEl) {
            navMenuEl.addEventListener('mouseleave', updateNavPill);
        }

        // Initial position
        setTimeout(updateNavPill, 500);
        window.addEventListener('resize', updateNavPill);
    }

    // === Language Toggle (setLanguage) ===
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('yilu-lang', lang);
        const t = TRANSLATIONS[lang];

        // Update all data-i18n elements (textContent)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) {
                // Handle section-title-reveal span wrapping
                const revealSpan = el.querySelector('.section-title-reveal');
                if (revealSpan) {
                    revealSpan.textContent = t[key];
                } else {
                    el.textContent = t[key];
                }
            }
        });

        // Update all data-i18n-html elements (innerHTML)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (t[key] !== undefined) {
                el.innerHTML = t[key];
            }
        });

        // Update all data-i18n-placeholder elements
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key] !== undefined) {
                el.placeholder = t[key];
            }
        });

        // Update lang toggle button state
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.setAttribute('data-lang', lang);
            langToggle.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切換至中文');
        }

        // Update document lang attribute and title
        document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
        document.title = lang === 'zh'
            ? '宜路科技 YILU Technology | 專業系統整合 & 企業資安服務'
            : 'YILU Technology | Professional IT Integration & Cybersecurity';
    }

    // Lang toggle click listener
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            setLanguage(currentLang === 'zh' ? 'en' : 'zh');
        });
    }

    // === Initialize ===
    syncAnchorOffset();
    handleScroll();
    // Initialize language (must run after section title reveal spans are created)
    setLanguage(currentLang);
});
