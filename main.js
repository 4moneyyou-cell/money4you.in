
function toggleMenu(){document.getElementById('navWrap').classList.toggle('open')}
function submitFunding(e){
 e.preventDefault();
 const form=document.getElementById('fundingForm');
 const data=new FormData(form);
 const msg=[
 'MONEY4YOU FUNDING ENQUIRY',
 'Name: '+data.get('name'),
 'Mobile: '+data.get('mobile'),
 'Business: '+data.get('business'),
 'City/State: '+data.get('location'),
 'Requirement: '+data.get('purpose'),
 'Funding: '+data.get('amount'),
 'Turnover: '+data.get('turnover'),
 'Details: '+(data.get('details')||'-')
 ].join('\n');
 document.getElementById('success').style.display='block';
 window.open('https://wa.me/919999999999?text='+encodeURIComponent(msg),'_blank');
}
function calcWC(){
 const sales=Number(document.getElementById('sales').value)||0;
 const days=Number(document.getElementById('days').value)||0;
 const margin=Number(document.getElementById('margin').value)||0;
 const gap=sales*(days/365)*(1-margin/100);
 document.getElementById('wcResult').textContent='Illustrative funding gap: ₹'+gap.toLocaleString('en-IN',{maximumFractionDigits:0});
}
