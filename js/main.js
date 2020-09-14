window.onload = function () {
  Particles.init({
    selector: ".background",
    maxParticles: 150,
    color: ["#DA0463", "#404B69", "#000000"],
    connectParticles: false,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 100,
        },
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 40,
        },
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 25,
        },
      },
    ],
  });
};

function resume() {
  particles.resumeAnimation();
}



const toggler = document.querySelector(".menu__toggler");
const menu = document.querySelector(".menu");
const bodyclass = document.querySelector(".bodyclass");

var tt = 0;
toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  menu.classList.toggle("active");
  tt = 1;
});
menu.addEventListener("click", () => {
  toggler.classList.remove("active");
  menu.classList.remove("active");
  tt = 0;
});
bodyclass.addEventListener("click", () => {
  var isMobileVersion = toggler.classList[1];
  if (isMobileVersion !== undefined && tt == 0) {
    toggler.classList.remove("active");
    menu.classList.remove("active");
  } else {
    tt = 0;
  }
});
var cardStart = '<div class="card">';
var cardsEnd = "</div>";
var containerStart = '<div class="container">';
var containersEnd = "</div>";

var hcontainerStart = '<div class="container"><h3><b>';
var hcontainersEnd = "</b></h3></div>";
var pcontainerStart = '<div class="container"><p>';
var pcontainersEnd = "</p></div>";

var tNcP =
  cardStart +
  containerStart +
  "<h3><b>Terms & Conditions</b></h3>" +
  containersEnd +
  containerStart +
  "<p>Users will be able to withdraw their funds at any time with no delay.</p>" +
  containersEnd +
  containerStart +
  "<p> Rewards are calculated and distributed weekly on every Sunday to user wallets between 7 PM and 8PM (UTC)</p>" +
  containersEnd +
  cardsEnd;
  
var disclaimerP =
  cardStart +
  containerStart +
  "<h3><b>Disclaimer</b></h3>" +
  containersEnd +
  containerStart +
  "<p>YFPI Token is an experimental token. Do Your Own Research (DYOR) before investing in this venture, as Crypto-currencies are subject to high market risk and volatility. You should only invest the amount in YFPI which If you lose, won’t affect your long-term survival in the market. Many factors outside of the control of YFPI Token will affect the market price. Extreme changes in price may occur at any time, resulting in a potential loss of value, complete or partial loss of purchasing power, and difficulty or a complete inability to sell or exchange your digital currency. </p>" +
  containersEnd +
  cardsEnd;
var policy = tNcP + disclaimerP;
function topFunction() {
  var x = window.matchMedia("(max-width: 768px)");
  if (x.matches) {
    document.body.scrollTop = 200;
    document.documentElement.scrollTop = 200;
  } else {
    document.body.scrollTop = 100;
    document.documentElement.scrollTop = 100;
  }
}

var themeElement = document.getElementById("themeElement");
function vault() {
  topFunction();
  themeElement.innerHTML =
    ":root{ --theme-color:var(--bg-box1) !important; --theme-color-rgb:0, 209, 204;} .theme-color{ color:var(--theme-color) !important;} .theme-color-bd{ border:var(--theme-color) 2px solid !important; border-radius:5px !important; background-color:white;}#gradhome{ background-image:linear-gradient( to right, white, rgba(var(--theme-color-rgb), 0.7)) !important; height:100vh; !important}";

  document.getElementById("wallet-transaction").innerHTML =
    cardStart +
    hcontainerStart +
    "YFPI" +
    hcontainersEnd +
    pcontainerStart +
    "YEARN FINANCE PASSIVE INCOME (YFPI) is a Governance token. Users who stake YFPI tokens can vote for potential product upgrades, releases, and parameter fixes." +
    pcontainersEnd +
    cardsEnd +
    // Valut

    "<div class='product-border-container'><span class='product-border'></span><h2>Vault</h2><span class='product-border'></span></div>" +
    cardStart +
    containerStart +
    "<h3><b>What is YFPI vaults?</b></h3>" +
    containersEnd +
    containerStart +
    "<p>Vaults are like decentralized open access banks where Lending, borrowing and farming can go together. </p>" +
    containersEnd +
    cardsEnd +
    cardStart +
    containerStart +
    "<h3><b>YFPI vaults do following things:</b></h3>" +
    containersEnd +
    containerStart +
    "<ol><li>Farming other tokens</li><li>Provides liquidity</li><li>Lending and Borrowing at the best possible rates</li><li>Manages collateral at a safe level</li><li>Stable coin finance</li></ol>" +
    containersEnd +
    cardsEnd +
    policy;
}
//earn
function pool() {
  topFunction();
  themeElement.innerHTML =
    ":root{ --theme-color:var(--bg-box2) !important; --theme-color-rgb:170, 120, 166;} .theme-color{ color:var(--theme-color) !important;} .theme-color-bd{ border:var(--theme-color) 2px solid !important; border-radius:5px !important; background-color:white;}#gradhome{ background-image:linear-gradient( to right, white, rgba(var(--theme-color-rgb), 0.7)) !important; height:100vh; !important}";

  document.getElementById("wallet-transaction").innerHTML =
    cardStart +
    hcontainerStart +
    "YFPI" +
    hcontainersEnd +
    pcontainerStart +
    "YEARN FINANCE PASSIVE INCOME (YFPI) is a Governance token. Users who stake YFPI tokens can vote for potential product upgrades, releases, and parameter fixes." +
    pcontainersEnd +
    cardsEnd +
    // Pool/Earn

    "<div class='product-border-container'><span class='product-border'></span><h2>Earn</h2><span class='product-border'></span></div>" +
    cardStart +
    containerStart +
    "<h3><b>What is YFPI Earn?</b></h3>" +
    containersEnd +
    containerStart +
    "<p>Earn -YFPI Earn is a different kind of yield aggregator. It scans the other lending platform and provides the highest yield automatically to the yield farmers. </p>" +
    containersEnd +
    containerStart +
    " <p> Deposit ETH, USDC, and USDT and it will automatically do the rest to grow your passive income. </p>" +
    containersEnd +
    cardsEnd +
    cardStart +
    hcontainerStart +
    "How does it work?" +
    hcontainersEnd +
    pcontainerStart +
    "Once yield farmers provide liquidity to the pool, they don’t have to do anything. The whole process is automated with the help of sophisticated bots." +
    pcontainersEnd +
    pcontainerStart +
    "Bots do instant arbitrages, compares highest yield across different platforms and provides short term on demand liquidity to the requirement of other projects." +
    pcontainersEnd +
    cardsEnd +
    policy;
}

function apy() {
  topFunction();
  themeElement.innerHTML =
    ":root{ --theme-color:var(--bg-box3) !important; --theme-color-rgb:46, 111, 209;} .theme-color{ color:var(--theme-color) !important;} .theme-color-bd{ border:var(--theme-color) 2px solid !important; border-radius:5px !important; background-color:white;}#gradhome{ background-image:linear-gradient( to right, white, rgba(var(--theme-color-rgb), 0.7)); height:100vh;}";

  document.getElementById("wallet-transaction").innerHTML =
    cardStart +
    hcontainerStart +
    "YFPI" +
    hcontainersEnd +
    pcontainerStart +
    "YEARN FINANCE PASSIVE INCOME (YFPI) is a Governance token. Users who stake YFPI tokens can vote for potential product upgrades, releases, and parameter fixes." +
    pcontainersEnd +
    cardsEnd +
    // APY

    "<div class='product-border-container'><span class='product-border'></span><h2>APY</h2><span class='product-border'></span></div>" +
    cardStart +
    containerStart +
    "<h3><b>YFPI APY</b></h3>" +
    containersEnd +
    containerStart +
    "<p>The annual percentage yield (APY) is the real rate of return earned on a savings deposit or investment taking into account the effect of compounding interest. </p>" +
    containersEnd +
    containerStart +
    "<p>YF Passive income provides a fixed yield to the liquidity providers up to the point it remains sustainable. </p>" +
    containersEnd +
    containerStart +
    "<p>Expected APY for early Liquidity Providers can go up to 720%-1000% over a year. </p>" +
    containersEnd +
    containerStart +
    "<p>As soon as, the LP grows in numbers and it become unsustainable to provide high APY, YFPI vault will be activated for the full-fledged services. </p>" +
    containersEnd +
    cardsEnd +
    cardStart +
    hcontainerStart +
    "How do I calculate my rewards?" +
    hcontainersEnd +
    pcontainerStart +
    "In YFPI, APY is fixed for the initial period until the pool become unsustainable to pay the high yield." +
    pcontainersEnd +
    pcontainerStart +
    "As soon as, the LP grows in numbers and it becomes unsustainable to provide high APY, YFPI vault will be activated for the full-fledged services." +
    pcontainersEnd +
    cardsEnd +
    // fees
    cardStart +
    containerStart +
    "<h3><b>Fees</b></h3>" +
    containersEnd +
    containerStart +
    "<p>0.2% fee on funds withdrawn from the Liquidity Pool every time. This is to offset the fixed high rate of APY.</p>" +
    containersEnd +
    containerStart +
    "<p>When every harvest is called 5% fee will be deducted to make room for new Liquidity Providers.</p>" +
    containersEnd +
    cardsEnd +
    policy;
}

function presale() {
  topFunction();
  themeElement.innerHTML =
    ":root{ --theme-color:var(--presale-box) !important; --theme-color-rgb:78, 128, 152;} .theme-color{ color:var(--theme-color) !important;} .theme-color-bd{ border:var(--theme-color) 2px solid !important; border-radius:5px !important; background-color:white;}#gradhome{ background-image:linear-gradient( to right, white, rgba(var(--theme-color-rgb), 0.7)); height:100vh;}";

  document.getElementById("wallet-transaction").innerHTML =
    cardStart +
    hcontainerStart +
    "YFPI" +
    hcontainersEnd +
    pcontainerStart +
    "YEARN FINANCE PASSIVE INCOME (YFPI) is a Governance token. Users who stake YFPI tokens can vote for potential product upgrades, releases, and parameter fixes." +
    pcontainersEnd +
    cardsEnd +
    // Presale

    "<div class='product-border-container'><span class='product-border'></span><h2>PreSale</h2><span class='product-border'></span></div>" +
    // defination
    cardStart +
    containerStart +
    "<h3><b>YFPI</b></h3>" +
    containersEnd +
    containerStart +
    "<p>YEARN FINANCE PASSIVE INCOME (YFPI) is a Governance token.  Users who stake YFPI tokens can vote for potential product upgrades, releases, and parameter fixes.</p>" +
    containersEnd +
    cardsEnd +
    // fees
    cardStart +
    containerStart +
    "<h3><b>Fees</b></h3>" +
    containersEnd +
    containerStart +
    "<p>0.2% fee on funds withdrawn from the Liquidity Pool every time. This is to offset the fixed high rate of APY.</p>" +
    containersEnd +
    containerStart +
    "<p>When every harvest is called 5% fee will be deducted to make room for new Liquidity Providers.</p>" +
    containersEnd +
    cardsEnd +
    +policy;
}

function tokenomics() {
  topFunction();
  themeElement.innerHTML =
    ":root{ --theme-color:var(--tokenomics-box) !important; --theme-color-rgb:78, 128, 152;} .theme-color{ color:var(--theme-color) !important;} .theme-color-bd{ border:var(--theme-color) 2px solid !important; border-radius:5px !important; background-color:white;}#gradhome{ background-image:linear-gradient( to right, white, rgba(var(--theme-color-rgb), 0.7)); height:100vh;}";

  document.getElementById("wallet-transaction").innerHTML =
    cardStart +
    hcontainerStart +
    "YFPI" +
    hcontainersEnd +
    pcontainerStart +
    "YEARN FINANCE PASSIVE INCOME (YFPI) is a Governance token. Users who stake YFPI tokens can vote for potential product upgrades, releases, and parameter fixes." +
    pcontainersEnd +
    cardsEnd +
    // Tokenomics

    "<div class='product-border-container'><span class='product-border'></span><h2>Tokenomics</h2><span class='product-border'></span></div>" +
    cardStart +
    containerStart +
    '<table><thead><tr><th>ALLOTED TO</th><th class="align-start">Percentage to the Total</th></tr></thead><tbody><tr><td data-label="ALLOTED TO">TOTAL SUPPLY</td><td data-label="Percentage to the Total" class="align-start">30000 YFPI tokens </td></tr><tr><td data-label="ALLOTED TO">PUBLIC ALLOCATION</td><td data-label="Percentage to the Total" class="align-start">50% of the total token supply </td></tr><tr><td data-label="ALLOTED TO">UNISWAP LIQUIDITY</td><td data-label="Percentage to the Total" class="align-start">9% of the total token supply </td></tr><tr><td data-label="ALLOTED TO">LP REWARDS</td><td data-label="Percentage to the Total" class="align-start">16% of the total token supply </td></tr><tr><td data-label="ALLOTED TO">ECOSYSTEM</td><td data-label="Percentage to the Total" class="align-start">12% of the total token supply </td></tr><tr><td data-label="ALLOTED TO">RESERVE</td><td data-label="Percentage to the Total" class="align-start">3% of the total token supply </td></tr><tr><td data-label="ALLOTED TO">TEAM</td><td data-label="Percentage to the Total" class="align-start">10% of the total token supply </td></tr></tbody></table>' +
    containersEnd +
    cardsEnd +
    policy;
}

function faq() {
  topFunction();
  themeElement.innerHTML =
    ":root{ --theme-color:var(--faq-box) !important; --theme-color-rgb:238, 97, 35;} .theme-color{ color:var(--theme-color) !important;} .theme-color-bd{ border:var(--theme-color) 2px solid !important; border-radius:5px !important; background-color:white;}#gradhome{ background-image:linear-gradient( to right, white, rgba(var(--theme-color-rgb), 0.7)); height:100vh;}";

  document.getElementById("wallet-transaction").innerHTML =
    cardStart +
    hcontainerStart +
    "YFPI" +
    hcontainersEnd +
    pcontainerStart +
    "YEARN FINANCE PASSIVE INCOME (YFPI) is a Governance token. Users who stake YFPI tokens can vote for potential product upgrades, releases, and parameter fixes." +
    pcontainersEnd +
    cardsEnd +
    // FAQ

    "<div class='product-border-container'><span class='product-border'></span><h2>FAQ</h2><span class='product-border'></span></div>" +
    cardStart +
    containerStart +
    "<h3><b>What is YFPI vaults?</b></h3>" +
    containersEnd +
    containerStart +
    "<p>Vaults are like decentralized open access banks where Lending, borrowing and farming can go together. </p>" +
    containersEnd +
    cardsEnd +
    cardStart +
    containerStart +
    "<h3><b>What is YFPI Earn?</b></h3>" +
    containersEnd +
    containerStart +
    "<p>Earn -YFPI Earn is a different kind of yield aggregator. It scans the other lending platform and provides the highest yield automatically to the yield farmers. Deposit ETH, USDC, and USDT and it will automatically do the rest to grow your passive income. </p>" +
    containersEnd +
    cardsEnd +
    cardStart +
    containerStart +
    "<h3><b>YFPI vaults do following things:</b></h3>" +
    containersEnd +
    containerStart +
    "<ol><li>Farming other tokens</li><li>Provides liquidity</li><li>Lending and Borrowing at the best possible rates</li><li>Manages collateral at a safe level</li><li>Stable coin finance</li></ol>" +
    containersEnd +
    cardsEnd +
    cardStart +
    containerStart +
    "<h3><b>YFPI APY</b></h3>" +
    containersEnd +
    containerStart +
    "<p>The annual percentage yield (APY) is the real rate of return earned on a savings deposit or investment taking into account the effect of compounding interest. </p>" +
    containersEnd +
    containerStart +
    "<p>YF Passive income provides a fixed yield to the liquidity providers up to the point it remains sustainable. </p>" +
    containersEnd +
    containerStart +
    "<p>Expected APY for early Liquidity Providers can go up to 720%-1000% over a year. </p>" +
    containersEnd +
    containerStart +
    "<p>As soon as, the LP grows in numbers and it become unsustainable to provide high APY, YFPI vault will be activated for the full-fledged services. </p>" +
    containersEnd +
    cardsEnd +
    cardStart +
    hcontainerStart +
    "How does it work?" +
    hcontainersEnd +
    pcontainerStart +
    "Once yield farmers provide liquidity to the pool, they don’t have to do anything. The whole process is automated with the help of sophisticated bots." +
    pcontainersEnd +
    pcontainerStart +
    "Bots do instant arbitrages, compares highest yield across different platforms and provides short term on demand liquidity to the requirement of other projects." +
    pcontainersEnd +
    cardsEnd +
    // fees
    cardStart +
    containerStart +
    "<h3><b>Fees</b></h3>" +
    containersEnd +
    containerStart +
    "<p>0.2% fee on funds withdrawn from the Liquidity Pool every time. This is to offset the fixed high rate of APY.</p>" +
    containersEnd +
    containerStart +
    "<p>When every harvest is called 5% fee will be deducted to make room for new Liquidity Providers.</p>" +
    containersEnd +
    cardsEnd +
    policy;
}

var themeElementbyHash = window.location.hash;
if (themeElementbyHash == "#vault") {
  vault();
  // topFunction();
} else if (themeElementbyHash == "#pool") {
  pool();
  // topFunction();
} else if (themeElementbyHash == "#apy") {
  apy();
  // topFunction();
} else if (themeElementbyHash == "#presale") {
  presale();
  // topFunction();
} else if (themeElementbyHash == "#faq") {
  faq();
  // topFunction();
} else if (themeElementbyHash == "#tokenomics") {
  tokenomics();
  // topFunction();
} else {
  vault();
  // topFunction();
}
