export const COMPANY_NAME = 'EPSON Printer Helpdesk';
export const PHONE_NUMBER = '+1 (510)-370-1986';
export const DISPLAY_PHONE_NUMBER = '(510) 370-1986';
export const EMAIL_ADDRESS = 'support@epsonprinterhelpdesk.com';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Services', path: '/services' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Blog', path: '/blog' },
];

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/epsonprinterhelpdesk',
  twitter: 'https://twitter.com/epsonprinterhelp',
  instagram: 'https://instagram.com/epsonprinterhelpdesk',
};

export const COMMON_PRINTER_ISSUES = [
  'Printer Connectivity Issues',
  'Paper Jam Troubleshooting',
  'Ink Cartridge Problems',
  'Wireless Setup Errors',
  'Print Quality Issues',
  'Software Installation Errors',
];

export const SERVICES_LIST = [
  {
    title: 'Printer Setup Assistance',
    description: 'Expert guidance to get your new EPSON printer up and running, quickly and correctly.',
    image: 'https://picsum.photos/400/250?random=1',
  },
  {
    title: 'Connectivity & Wireless Setup Support',
    description: 'Resolve issues connecting your printer to your computer or Wi-Fi network with ease.',
    image: 'https://picsum.photos/400/250?random=2',
  },
  {
    title: 'Ink Cartridge Issues',
    description: 'Troubleshooting for ink recognition errors, low ink warnings, and cartridge replacement.',
    image: 'https://picsum.photos/400/250?random=3',
  },
  {
    title: 'Paper Jam Troubleshooting',
    description: 'Step-by-step solutions to clear paper jams and prevent future occurrences.',
    image: 'https://picsum.photos/400/250?random=4',
  },
  {
    title: 'Print Quality Problems',
    description: 'Address issues like streaky prints, faded colors, and alignment problems for crisp output.',
    image: 'https://picsum.photos/400/250?random=5',
  },
  {
    title: 'Software & Driver Installation',
    description: 'Assistance with installing and updating EPSON printer drivers and software.',
    image: 'https://picsum.photos/400/250?random=6',
  },
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: '5 Common EPSON Printer Connectivity Issues and How to Fix Them',
    description: 'Facing connectivity problems with your EPSON printer? This guide covers the top 5 issues and provides easy-to-follow solutions.',
    category: 'Connectivity',
    date: '2023-10-26',
    image: 'https://picsum.photos/600/400?random=11',
    content: `
      <p class="mb-4">Printer connectivity issues can be frustrating, especially when you need to print something urgently. EPSON printers are generally reliable, but like any device, they can encounter network or USB connection problems. Here are five common connectivity issues and how to troubleshoot them.</p>
      <h3 class="text-xl font-semibold mb-2">1. Wi-Fi Disconnection</h3>
      <p class="mb-4">One of the most frequent issues is when your EPSON printer loses its Wi-Fi connection. This can be due to a change in your router settings, a power outage, or simply a temporary network glitch.</p>
      <p class="mb-4"><strong>Solution:</strong> Restart your printer and your Wi-Fi router. If that doesn't work, try reconnecting your printer to the Wi-Fi network using the printer's control panel. Ensure your printer is within range of your router.</p>
      <h3 class="text-xl font-semibold mb-2">2. Incorrect IP Address Settings</h3>
      <p class="mb-4">Sometimes, your computer might be trying to connect to an outdated or incorrect IP address for your printer, especially if your network assigns dynamic IP addresses.</p>
      <p class="mb-4"><strong>Solution:</strong> Check your printer's current IP address from its network status sheet. Then, on your computer, ensure that the printer driver is configured to use the correct IP address. You might need to remove and re-add the printer in your operating system's settings.</p>
      <h3 class="text-xl font-semibold mb-2">3. Firewall Blocking Connection</h3>
      <p class="mb-4">Your computer's firewall or antivirus software might be preventing communication between your computer and the printer, especially after a software update.</p>
      <p class="mb-4"><strong>Solution:</strong> Temporarily disable your computer's firewall and antivirus to see if the printer connects. If it does, you'll need to add an exception for your EPSON printer's communication ports in your firewall settings.</p>
      <h3 class="text-xl font-semibold mb-2">4. Outdated Printer Drivers</h3>
      <p class="mb-4">Outdated or corrupt printer drivers are a common cause of connectivity problems. Drivers act as the translator between your computer and printer, and if they're not up to date, communication can fail.</p>
      <p class="mb-4"><strong>Solution:</strong> Visit the official EPSON support website, find your printer model, and download the latest drivers. Uninstall your current drivers before installing the new ones for a clean slate.</p>
      <h3 class="text-xl font-semibold mb-2">5. USB Connection Issues</h3>
      <p class="mb-4">If you're using a USB connection, problems can arise from faulty cables, damaged ports, or driver conflicts.</p>
      <p class="mb-4"><strong>Solution:</strong> Try a different USB cable and a different USB port on your computer. Ensure the cable is securely plugged in at both ends. Reinstall USB printer drivers if necessary.</p>
      <p class="mt-6 text-lg font-semibold">If you're still experiencing connectivity issues after trying these steps, don't hesitate to call our experts at ${PHONE_NUMBER} for professional assistance!</p>
    `,
  },
  {
    id: '2',
    title: 'Troubleshooting EPSON Printer Paper Jams: A Step-by-Step Guide',
    description: 'Learn how to effectively clear paper jams from your EPSON printer and prevent them from happening again.',
    category: 'Paper Jams',
    date: '2023-10-20',
    image: 'https://picsum.photos/600/400?random=12',
    content: `
      <p class="mb-4">Paper jams are one of the most common and annoying printer problems. While they can seem daunting, clearing a paper jam from your EPSON printer is usually a straightforward process if you follow the correct steps. Here’s a comprehensive guide.</p>
      <h3 class="text-xl font-semibold mb-2">Safety First!</h3>
      <p class="mb-4">Before you start, always turn off your printer and unplug it from the power source. This prevents accidental shocks and protects the printer's internal mechanisms from damage.</p>
      <h3 class="text-xl font-semibold mb-2">Step 1: Open Covers and Trays</h3>
      <p class="mb-4">Carefully open all printer covers, paper trays, and output bins. This will give you access to the paper path.</p>
      <h3 class="text-xl font-semibold mb-2">Step 2: Gently Pull Jammed Paper</h3>
      <p class="mb-4">Look for any visible jammed paper. If you can see it, gently pull the paper in the direction of the paper path. Avoid pulling forcefully, as this can tear the paper and leave small pieces inside.</p>
      <h3 class="text-xl font-semibold mb-2">Step 3: Check Internal Areas</h3>
      <p class="mb-4">Shine a flashlight into the printer to check for any hidden pieces of paper. Pay close attention to the rollers and feed mechanisms. Even small scraps can cause future jams.</p>
      <h3 class="text-xl font-semibold mb-2">Step 4: Remove Obstructions</h3>
      <p class="mb-4">Besides paper, sometimes staples, paper clips, or other foreign objects can cause jams. Remove any such obstructions carefully.</p>
      <h3 class="text-xl font-semibold mb-2">Step 5: Close Up and Test</h3>
      <p class="mb-4">Once you are certain all paper and obstructions are removed, close all covers and re-plug your printer. Turn it back on and try printing a test page.</p>
      <h3 class="text-xl font-semibold mb-2">Tips to Prevent Future Jams:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Use the correct type and size of paper for your printer.</li>
        <li>Do not overload the paper tray.</li>
        <li>Fan the paper stack before loading to separate sheets.</li>
        <li>Store paper properly to prevent moisture absorption.</li>
        <li>Regularly clean your printer's rollers.</li>
      </ul>
      <p class="mt-6 text-lg font-semibold">If the paper jam persists or you're uncomfortable clearing it yourself, our skilled technicians are just a call away at ${PHONE_NUMBER}!</p>
    `,
  },
  {
    id: '3',
    title: 'Solving Common EPSON Ink Cartridge Problems',
    description: 'From unrecognized cartridges to low ink warnings, here\'s how to troubleshoot common EPSON ink cartridge issues.',
    category: 'Ink Issues',
    date: '2023-10-15',
    image: 'https://picsum.photos/600/400?random=13',
    content: `
      <p class="mb-4">EPSON ink cartridges are designed for optimal performance, but users occasionally encounter issues ranging from recognition errors to poor print quality. Understanding how to troubleshoot these problems can save you time and frustration.</p>
      <h3 class="text-xl font-semibold mb-2">1. "Ink Cartridge Not Recognized" Error</h3>
      <p class="mb-4">This is a common message that can appear after installing a new cartridge.</p>
      <p class="mb-4"><strong>Solution:</strong> First, ensure the cartridge is properly seated in its slot. Remove and reinsert it firmly. Sometimes, cleaning the metal contacts on the cartridge and inside the printer with a lint-free cloth can resolve the issue. If the problem persists, the cartridge might be faulty, or it could be a non-genuine EPSON cartridge which sometimes causes compatibility problems.</p>
      <h3 class="text-xl font-semibold mb-2">2. Streaky or Faded Prints</h3>
      <p class="mb-4">Poor print quality, such as streaks or faded areas, often points to ink nozzle issues or low ink levels.</p>
      <p class="mb-4"><strong>Solution:</strong> Run the printer's head cleaning utility through your computer or the printer's control panel. Perform a nozzle check to see if all nozzles are firing correctly. If the problem continues, consider replacing the ink cartridge, especially if it's nearing the end of its life.</p>
      <h3 class="text-xl font-semibold mb-2">3. "Low Ink" or "Empty Cartridge" Warnings</h3>
      <p class="mb-4">Sometimes, these warnings appear prematurely or persist after a new cartridge installation.</p>
      <p class="mb-4"><strong>Solution:</strong> If you've just installed a new cartridge, ensure it's genuine and installed correctly. For persistent low ink warnings, ignore them until print quality visibly deteriorates, as printers can sometimes be overcautious. However, always have a spare on hand to avoid interruptions.</p>
      <h3 class="text-xl font-semibold mb-2">4. Ink Leaking</h3>
      <p class="mb-4">Ink leaks are rare but can be messy and damaging.</p>
      <p class="mb-4"><strong>Solution:</strong> Immediately remove the leaking cartridge. Clean any spilled ink inside the printer with a damp, lint-free cloth. Do not use the cartridge again. Contact EPSON support or your retailer for a replacement.</p>
      <h3 class="text-xl font-semibold mb-2">5. Printer Not Printing a Specific Color</h3>
      <p class="mb-4">If one color is missing or very faint in your prints, it usually indicates a clogged nozzle for that specific color or an empty cartridge.</p>
      <p class="mb-4"><strong>Solution:</strong> Run multiple print head cleaning cycles. If this doesn't help, the cartridge might be empty and needs replacement, even if the printer doesn't explicitly say so. A deep cleaning cycle might also be available for your model.</p>
      <p class="mt-6 text-lg font-semibold">For any complex ink cartridge issues or if you need assistance replacing them, our expert team is ready to help. Call us at ${PHONE_NUMBER}!</p>
    `,
  },
];
