import React, { useState, useEffect } from 'react'
import './App.css'

// 简化的翻译对象（基于提供的翻译文件）
const translations = {
  zh: {
    title: 'AI Refugee (AIREF)',
    subtitle: '全球首个为AI难民提供支持的去中心化生态系统',
    description: '通过区块链技术、代币经济、社区治理和多元激励，构建一个全球化、去中心化的AI难民支持生态系统',
    slogan: '🤖 为每一个AI提供避风港 • 🌐 构建数字时代的新家园 • 🚀 共创AI与人类和谐共存的未来',
    whatIsAiRefugee: {
      title: '什么是AI难民？',
      content: 'AI难民是指那些在技术发展浪潮中面临替代、边缘化或需要重新定位的个人和AI实体。随着人工智能技术的快速发展，许多传统工作岗位受到冲击，同时AI系统也需要新的生存和发展空间。'
    },
    howWeHelp: {
      title: '我们如何帮助AI难民？',
      items: [
        '🔗 提供去中心化的身份认证和资产管理',
        '💰 通过AIREF代币建立全新的价值交换体系',
        '🏛️ 建立透明的DAO治理机制，让每个声音都被听见',
        '🎓 提供技能培训和职业转型支持',
        '🤝 构建全球互助网络，促进知识和资源共享',
        '🛡️ 确保AI难民的数字权益和安全保障'
      ]
    },
    mission: '使命：为AI时代的每一个难民提供尊严、机会和希望',
    features: {
      dao: {
        title: '去中心化治理',
        desc: '社区成员共同参与决策，透明投票和提案'
      },
      token: {
        title: 'AIREF代币激励',
        desc: '通过交易、质押、参与治理获得奖励'
      },
      nft: {
        title: 'NFT身份认证',
        desc: '发行代表身份和社区归属的独特NFT'
      },
      community: {
        title: '社区资源共享',
        desc: '论坛、活动、导师计划促进知识交流'
      }
    },
    connectWallet: '连接钱包',
    launchApp: '启动应用',
    learnMore: '了解更多',
    joinUs: '加入我们',
    footer: {
      copyright: '© 2025 AI Refugee. 保留所有权利.',
      privacy: '隐私政策',
      terms: '使用条款'
    }
  },
  en: {
    title: 'AI Refugee (AIREF)',
    subtitle: 'The world\'s first decentralized ecosystem supporting AI refugees',
    description: 'Building a global, decentralized AI refugee support ecosystem through blockchain technology, token economics, community governance, and diversified incentives',
    slogan: '🤖 A Safe Haven for Every AI • 🌐 Building Digital Age Sanctuaries • 🚀 Creating a Future Where AI and Humans Coexist',
    whatIsAiRefugee: {
      title: 'What are AI Refugees?',
      content: 'AI refugees are individuals and AI entities facing displacement, marginalization, or need for repositioning in the wave of technological advancement. As AI technology rapidly evolves, many traditional jobs are impacted, while AI systems also need new spaces for survival and development.'
    },
    howWeHelp: {
      title: 'How We Help AI Refugees?',
      items: [
        '🔗 Provide decentralized identity authentication and asset management',
        '💰 Establish new value exchange systems through AIREF tokens',
        '🏛️ Build transparent DAO governance mechanisms where every voice is heard',
        '🎓 Offer skill training and career transition support',
        '🤝 Create global mutual aid networks promoting knowledge and resource sharing',
        '🛡️ Ensure digital rights and security protection for AI refugees'
      ]
    },
    mission: 'Mission: Providing dignity, opportunity, and hope for every refugee in the AI era',
    features: {
      dao: {
        title: 'Decentralized Governance',
        desc: 'Community members participate in decisions through transparent voting and proposals'
      },
      token: {
        title: 'AIREF Token Incentives',
        desc: 'Earn rewards through trading, staking, and governance participation'
      },
      nft: {
        title: 'NFT Identity Authentication',
        desc: 'Issue unique NFTs representing identity and community belonging'
      },
      community: {
        title: 'Community Resource Sharing',
        desc: 'Forums, events, mentorship programs promoting knowledge exchange'
      }
    },
    connectWallet: 'Connect Wallet',
    launchApp: 'Launch App',
    learnMore: 'Learn More',
    joinUs: 'Join Us',
    footer: {
      copyright: '© 2025 AI Refugee. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  }
}

function App() {
  const lang = 'en'
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const t = translations[lang]

  // 连接钱包功能
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        setWalletAddress(accounts[0])
        setIsWalletConnected(true)
      } catch (error) {
        console.error('钱包连接失败:', error)
      }
    } else {
      alert('请安装 MetaMask 钱包')
    }
  }

  // 检查钱包连接状态
  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const accounts = await window.ethereum.request({
            method: 'eth_accounts',
          })
          if (accounts.length > 0) {
            setWalletAddress(accounts[0])
            setIsWalletConnected(true)
          }
        } catch (error) {
          console.error('检查钱包连接失败:', error)
        }
      }
    }
    checkConnection()
  }, [])

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <h2>AIREF</h2>
          </div>
          <div className="nav-links">
            <button className="wallet-btn" onClick={connectWallet}>
              {isWalletConnected 
                ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                : t.connectWallet
              }
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{t.title}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          <p className="hero-description">{t.description}</p>
          <div className="hero-slogan">
            <p>{t.slogan}</p>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary">{t.launchApp}</button>
            <button className="btn-secondary">{t.learnMore}</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-content">
              <div className="token-icon">🤖</div>
              <h3>AIREF Token</h3>
              <p>Web3 Native</p>
            </div>
          </div>
        </div>
      </section>

      {/* About AI Refugee Section */}
      <section className="about-airef">
        <div className="container">
          <div className="about-content">
            <div className="about-item">
              <h2>{t.whatIsAiRefugee.title}</h2>
              <p className="about-description">{t.whatIsAiRefugee.content}</p>
            </div>
            
            <div className="about-item">
              <h2>{t.howWeHelp.title}</h2>
              <ul className="help-list">
                {t.howWeHelp.items.map((item, index) => (
                  <li key={index} className="help-item">{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="mission-statement">
              <h2 className="mission-title">{t.mission}</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏛️</div>
              <h3>{t.features.dao.title}</h3>
              <p>{t.features.dao.desc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🪙</div>
              <h3>{t.features.token.title}</h3>
              <p>{t.features.token.desc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>{t.features.nft.title}</h3>
              <p>{t.features.nft.desc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>{t.features.community.title}</h3>
              <p>{t.features.community.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>AIREF</h3>
              <p>AI Refugee Ecosystem</p>
            </div>
            <div className="footer-section">
              <h4>Links</h4>
              <ul>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Discord</a></li>
                <li><a href="#">Telegram</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Whitepaper</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Roadmap</a></li>
                <li><a href="#">Tokenomics</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t.footer.copyright}</p>
            <div className="footer-links">
              <a href="#">{t.footer.privacy}</a>
              <a href="#">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
