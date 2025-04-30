import { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    "year": 1997,
    "event": "Asian Financial Crisis",
    "setup": "Thailand just de-pegged the baht. Currencies across Asia are starting to wobble.",
    "answers": {
      "A": {
        "text": "Short Southeast Asian markets",
        "response": "You read the tea leaves  and shorted the whole continent. Respect.",
        "correct": true
      },
      "B": {
        "text": "Ignore it  it's local",
        "response": "You ignored it. Turns out, the contagion didnt.",
        "correct": false
      },
      "C": {
        "text": "Buy baht and go on vacation",
        "response": "Congrats, your holiday just cost 40% more. But at least you got a tan.",
        "correct": false
      }
    },
    "education": "The Thai baht collapse triggered a chain reaction across Asia. Global markets fell hard."
  },
  {
    "year": 2016,
    "event": "Brexit Vote",
    "setup": "The UK is voting on whether to leave the EU. Polls say it's staying.",
    "answers": {
      "A": {
        "text": "Short GBP, something feels off",
        "response": "Intuition > polls. You made gains while others Googled 'What is the EU?'",
        "correct": true
      },
      "B": {
        "text": "Buy GBP, polls always win",
        "response": "You trusted the polls. The pound trusted gravity.",
        "correct": false
      },
      "C": {
        "text": "Put all your savings in Beefeater Gin futures",
        "response": "No idea what market you're in, but youre definitely drunk on risk.",
        "correct": false
      }
    },
    "education": "The UK voted Leave. GBPUSD dropped 10% overnight  one of the biggest FX shocks ever."
  },
  {
    "year": 2021,
    "event": "Evergrande Crisis",
    "setup": "Chinas biggest property developer is on the brink. Media says its contained.",
    "answers": {
      "A": {
        "text": "Sell everything China-related",
        "response": "You bailed early. Smart move  contagion fears rattled global markets.",
        "correct": true
      },
      "B": {
        "text": "Buy China ETFs  overreaction",
        "response": "You saw value. But Evergrande saw courtrooms.",
        "correct": false
      },
      "C": {
        "text": "Buy 5 condos in Shenzhen",
        "response": "Great. You now own empty concrete and unlimited regret.",
        "correct": false
      }
    },
    "education": "Evergrande defaulted. Contagion fears spooked markets for weeks."
  },
  {
    "year": 2000,
    "event": "Peak Dotcom",
    "setup": "Its March 2000. NASDAQ just broke 5000. Everyones a paper millionaire.",
    "answers": {
      "A": {
        "text": "Take profits and chill",
        "response": "Profit taken. Stress avoided. You're officially the adult in the room.",
        "correct": true
      },
      "B": {
        "text": "Go long tech  its the new economy",
        "response": "The future is bright... but your portfolio just got deleted.",
        "correct": false
      },
      "C": {
        "text": "Buy Pets.com and start your own dotcom",
        "response": "You now run a startup selling fish food online. For pets you dont own.",
        "correct": false
      }
    },
    "education": "Dotcom bubble popped shortly after. NASDAQ lost ~78% over 2 years."
  },
  {
    "year": 2023,
    "event": "Banking Mini-Crisis",
    "setup": "SVB just collapsed. First Republic is wobbling. But the Fed says all deposits are safe.",
    "answers": {
      "A": {
        "text": "Short regionals, this isnt over",
        "response": "You didnt trust the Feds optimism. Turns out, neither did the markets.",
        "correct": true
      },
      "B": {
        "text": "Buy bank stocks  overreaction",
        "response": "Catch that falling knife? Whoops. It was a sword.",
        "correct": false
      },
      "C": {
        "text": "Open a checking account at every bank for the free toasters",
        "response": "Your kitchen is stacked. Your portfolio? Not so much.",
        "correct": false
      }
    },
    "education": "Several regional banks fell over the following weeks despite Fed backstops."
  },
  {
    "year": 2008,
    "event": "Lehman Brothers Collapse",
    "setup": "Its September 2008. Lehman Brothers is teetering. The world is watching.",
    "answers": {
      "A": {
        "text": "Short financials and buy volatility",
        "response": "You shorted the system and watched it crumble. Nice timing.",
        "correct": true
      },
      "B": {
        "text": "Buy bank stocks  they always bounce back",
        "response": "This bounce turned into a full-on faceplant.",
        "correct": false
      },
      "C": {
        "text": "Apply for a job at Lehman  they must be hiring at these prices",
        "response": "Bold move. You now work in a building that no longer exists.",
        "correct": false
      }
    },
    "education": "Lehman filed for bankruptcy in September 2008. It was the largest in U.S. history and triggered a global financial crisis."
  },
  {
    "year": 2020,
    "event": "COVID Crash",
    "setup": "March 2020. Lockdowns begin. Markets are crashing. Panic is everywhere.",
    "answers": {
      "A": {
        "text": "Buy SPY puts and hoard toilet paper",
        "response": "Portfolio up. Pantry full. You win on all fronts.",
        "correct": true
      },
      "B": {
        "text": "Buy the dip aggressively",
        "response": "You bought the dip. Unfortunately, the dip kept dipping.",
        "correct": false
      },
      "C": {
        "text": "Invest in cruise lines and book 5 future trips",
        "response": "Great. Your investments and vacations both got cancelled.",
        "correct": false
      }
    },
    "education": "From Feb to March 2020, the S&P 500 lost over 30%. It was the fastest market crash in history."
  },
  {
    "year": 2021,
    "event": "GameStop Short Squeeze",
    "setup": "GameStop is trading at $40. Reddits on fire. Media is confused.",
    "answers": {
      "A": {
        "text": "Buy call options and enjoy the ride",
        "response": "You joined the apes and rode it to the moon.",
        "correct": true
      },
      "B": {
        "text": "Short GME  this is irrational",
        "response": "You became a statistic in a hedge fund obituary.",
        "correct": false
      },
      "C": {
        "text": "Go long Blockbuster as a sympathy play",
        "response": "Blockbuster doesnt exist. Just like your gains.",
        "correct": false
      }
    },
    "education": "GME peaked at $483 in January 2021. It triggered one of the largest short squeezes in history."
  },
  {
    "year": 2015,
    "event": "Swiss Franc Unpeg",
    "setup": "The Swiss National Bank swears itll defend the EUR/CHF floor forever.",
    "answers": {
      "A": {
        "text": "Avoid the trade  sounds too good to be true",
        "response": "You dodged a financial landmine. Safe move.",
        "correct": true
      },
      "B": {
        "text": "Go long EUR/CHF  central banks dont lie",
        "response": "Turns out they do. Or at least change their minds fast.",
        "correct": false
      },
      "C": {
        "text": "Convert your life savings to fondue futures",
        "response": "Delicious. But not a hedge against currency collapse.",
        "correct": false
      }
    },
    "education": "On Jan 15, 2015, the SNB removed its EUR/CHF peg. The franc surged 30% in minutes, wiping out many traders."
  },
  {
    "year": 2022,
    "event": "LUNA Crash",
    "setup": "LUNA is booming. Anchor is paying 20% yield. Everyones getting rich.",
    "answers": {
      "A": {
        "text": "Exit while youre ahead  unsustainable vibes",
        "response": "You left before the music stopped. Solid.",
        "correct": true
      },
      "B": {
        "text": "Stake more  you cant beat 20% APY",
        "response": "20% returns, 100% losses. Congrats.",
        "correct": false
      },
      "C": {
        "text": "Take out a loan to buy LUNA, then burn the collateral for warmth",
        "response": "Financial nihilism: achieved.",
        "correct": false
      }
    },
    "education": "LUNA and its stablecoin UST collapsed in May 2022, erasing over $40B in value."
  },
  {
    "year": 2001,
    "event": "Post-9/11 Market Crash",
    "setup": "Markets just reopened after 9/11. Sentiment is shattered.",
    "answers": {
      "A": {
        "text": "Buy puts and prepare for panic",
        "response": "You hedged while others hoped. Smart defensive play.",
        "correct": true
      },
      "B": {
        "text": "Go long airlines  theyll recover fast",
        "response": "They did... eventually. But you went broke first.",
        "correct": false
      },
      "C": {
        "text": "Invest in anti-aircraft ETFs",
        "response": "What are you even buying? Radar stocks?",
        "correct": false
      }
    },
    "education": "Markets fell ~15% in the first week post-9/11. Airlines and tourism were hit hardest."
  },
  {
    "year": 2013,
    "event": "Bitcoin Hits $1,000",
    "setup": "BTC just broke $1,000. You heard about it from a nerdy friend in IT.",
    "answers": {
      "A": {
        "text": "Buy a small amount just in case",
        "response": "You took a flier. That flier became a rocket.",
        "correct": true
      },
      "B": {
        "text": "Its a scam. Avoid completely",
        "response": "Understandable take. But history wasnt kind to that decision.",
        "correct": false
      },
      "C": {
        "text": "Try mining with your microwave",
        "response": "Your pizza got warm. Your wallet stayed cold.",
        "correct": false
      }
    },
    "education": "BTC would crash in 2014, but long-term holders saw astronomical returns in later years."
  },
  {
    "year": 2007,
    "event": "Subprime Warnings",
    "setup": "Housing prices are soaring. Subprime lenders are everywhere.",
    "answers": {
      "A": {
        "text": "Short mortgage-backed securities",
        "response": "You saw the cracks. Welcome to the Big Short club.",
        "correct": true
      },
      "B": {
        "text": "Buy real estate  it always goes up",
        "response": "And then it didnt. Surprise!",
        "correct": false
      },
      "C": {
        "text": "Become a mortgage broker with no license",
        "response": "Congrats. You're part of the problem now.",
        "correct": false
      }
    },
    "education": "Subprime lending fueled a massive bubble. When it burst, it triggered the 2008 financial crisis."
  },
  {
    "year": 2021,
    "event": "ARK Invest Mania",
    "setup": "ARK Innovation ETF is up huge. Cathie Wood is a rockstar.",
    "answers": {
      "A": {
        "text": "Take profits  this feels euphoric",
        "response": "You took the money and avoided the drawdown. Clean exit.",
        "correct": true
      },
      "B": {
        "text": "Buy more ARK  she's the new Buffett",
        "response": "Turns out tech multiples cant go up forever.",
        "correct": false
      },
      "C": {
        "text": "Send her fan mail with your life savings inside",
        "response": "Innovative. And financially devastating.",
        "correct": false
      }
    },
    "education": "ARK peaked in early 2021 and dropped over 70% in the following year."
  },
  {
    "year": 2022,
    "event": "Inflation Panic",
    "setup": "Inflation just hit 8%. The Fed says its transitory.",
    "answers": {
      "A": {
        "text": "Short bonds  rate hikes incoming",
        "response": "You front-ran the Fed. Bondholders cried.",
        "correct": true
      },
      "B": {
        "text": "Trust Powell and stay long duration",
        "response": "The transitory era was anything but short.",
        "correct": false
      },
      "C": {
        "text": "Buy NFTs of cartoon money printers",
        "response": "At least the JPEGs are colorful while your wallet isnt.",
        "correct": false
      }
    },
    "education": "Inflation stayed high into 2023. The Fed hiked rates aggressively, crushing long-duration bonds."
  },
  {
    "year": 1987,
    "event": "Black Monday",
    "setup": "It's October 1987. Markets have been sliding. Then they crash 22% in a single day.",
    "answers": {
      "A": {
        "text": "Go defensive, buy bonds and gold",
        "response": "Safe haven mode activated. You dodged a brutal one-day drop.",
        "correct": true
      },
      "B": {
        "text": "Buy the dip immediately",
        "response": "Courageous... but the market kept panicking.",
        "correct": false
      },
      "C": {
        "text": "Sell everything and bury cash in backyard",
        "response": "You're a survivalist now. Also unemployed.",
        "correct": false
      }
    },
    "education": "On October 19, 1987, the Dow dropped 22.6%  the biggest one-day percentage loss in history."
  },
  {
    "year": 2003,
    "event": "Post-Iraq Invasion Market",
    "setup": "The U.S. has invaded Iraq. Oil is spiking. Markets are nervous.",
    "answers": {
      "A": {
        "text": "Buy oil stocks and defense contractors",
        "response": "War is awful, but markets love a profitable crisis.",
        "correct": true
      },
      "B": {
        "text": "Short the market  war is never good",
        "response": "War fears were priced in. You shorted the rebound.",
        "correct": false
      },
      "C": {
        "text": "Invest in camo-print fashion lines",
        "response": "The runway wasn't ready for that one.",
        "correct": false
      }
    },
    "education": "Markets rallied post-invasion in 2003 as uncertainty cleared and oil/defense sectors outperformed."
  },
  {
    "year": 2009,
    "event": "Market Bottom After 2008",
    "setup": "Its March 2009. S&P is down over 50% from its peak. Sentiment is at rock bottom.",
    "answers": {
      "A": {
        "text": "Start buying broad market ETFs",
        "response": "You caught the bottom. Congrats, youre the 0.01%.",
        "correct": true
      },
      "B": {
        "text": "Wait for another leg down",
        "response": "You waited. The rally didnt.",
        "correct": false
      },
      "C": {
        "text": "Invest in canned beans and bunkers",
        "response": "Youre ready for the apocalypse. Just not for retirement.",
        "correct": false
      }
    },
    "education": "March 9, 2009, marked the bottom of the Great Recession market crash. A massive bull run followed."
  },
  {
    "year": 1999,
    "event": "Y2K Scare",
    "setup": "Its late 1999. People think computers will break at midnight. Panic or profit?",
    "answers": {
      "A": {
        "text": "Stay long and ride the hype",
        "response": "You ignored the paranoia and printed gains.",
        "correct": true
      },
      "B": {
        "text": "Sell everything  digital doomsday is coming",
        "response": "Y2K wasnt it. But your fear trade definitely tanked.",
        "correct": false
      },
      "C": {
        "text": "Buy typewriters and join a monastery",
        "response": "Analog life chose you. So did financial irrelevance.",
        "correct": false
      }
    },
    "education": "Y2K fears were overblown. Markets rose into 2000 before the dotcom crash began."
  },
  {
    "year": 2018,
    "event": "Volatility Spike (Volmageddon)",
    "setup": "February 2018. VIX is abnormally low. Suddenly, it explodes.",
    "answers": {
      "A": {
        "text": "Short the XIV volatility product",
        "response": "Big brain. You profited off a volatility nuke.",
        "correct": true
      },
      "B": {
        "text": "Hold XIV  volatility always mean-reverts",
        "response": "XIV went to zero overnight. Oof.",
        "correct": false
      },
      "C": {
        "text": "Buy stress balls and hope for the best",
        "response": "Healthy coping, terrible trading.",
        "correct": false
      }
    },
    "education": "XIV, a short-volatility ETF, lost over 90% in one day in February 2018 due to a volatility spike."
  },
  {
    "year": 2014,
    "event": "Oil Price Crash",
    "setup": "Oil is at $100+. Then it starts crashing. Fast.",
    "answers": {
      "A": {
        "text": "Short oil and oil producers",
        "response": "You saw the oversupply coming. Sharp play.",
        "correct": true
      },
      "B": {
        "text": "Buy oil  this must be a dip",
        "response": "That dip was more of a slide into the abyss.",
        "correct": false
      },
      "C": {
        "text": "Invest in a personal oil rig",
        "response": "Enjoy your new $40,000 backyard decoration.",
        "correct": false
      }
    },
    "education": "In 2014, oil prices dropped over 60% due to a supply glut and weakening global demand."
  },
  {
    "year": 2011,
    "event": "US Credit Rating Downgrade",
    "setup": "S&P just downgraded the US credit rating. Markets are confused.",
    "answers": {
      "A": {
        "text": "Buy US Treasuries anyway",
        "response": "Paradoxically, Treasuries rallied. You won the mind game.",
        "correct": true
      },
      "B": {
        "text": "Sell Treasuries  downgrade = doom",
        "response": "Logical idea. But markets had other plans.",
        "correct": false
      },
      "C": {
        "text": "Bet on gold, bullets, and barbed wire",
        "response": "You're now prepped for the collapse that never came.",
        "correct": false
      }
    },
    "education": "Despite the downgrade, US Treasuries rallied as investors sought safety amid the confusion."
  },
  {
    "year": 2021,
    "event": "SPAC Mania",
    "setup": "SPACs are everywhere. Celebrities are launching blank-check companies.",
    "answers": {
      "A": {
        "text": "Avoid  this smells bubbly",
        "response": "You watched from the sidelines while others YOLOd and cried.",
        "correct": true
      },
      "B": {
        "text": "Buy random SPACs  easy money",
        "response": "Easy come, easy crash.",
        "correct": false
      },
      "C": {
        "text": "Start your own SPAC and merge with your imagination",
        "response": "Youve achieved theoretical riches and actual debt.",
        "correct": false
      }
    },
    "education": "SPACs peaked in early 2021, with most losing significant value by the end of the year."
  },
  {
    "year": 2020,
    "event": "Robinhood Surge",
    "setup": "Everyone is trading from their phones. Stimmy checks hit. Stocks fly.",
    "answers": {
      "A": {
        "text": "Ride the wave  momentum is king",
        "response": "You followed the apes and made gains. For a while.",
        "correct": true
      },
      "B": {
        "text": "Stay out  this is unsustainable",
        "response": "Sensible... but you missed some wild returns.",
        "correct": false
      },
      "C": {
        "text": "Buy stonks with your entire student loan",
        "response": "You YOLOd your degree into a meme. Impressive.",
        "correct": false
      }
    },
    "education": "Retail trading exploded in 2020, with apps like Robinhood fueling a surge in volume and volatility."
  },
  {
    "year": 2005,
    "event": "Housing Bubble Grows",
    "setup": "Everyones flipping houses. Rates are low. Mortgage ads are everywhere.",
    "answers": {
      "A": {
        "text": "Get cautious  too much froth",
        "response": "You saw the red flags before the headlines.",
        "correct": true
      },
      "B": {
        "text": "Join in  real estate only goes up",
        "response": "You joined the party just before the floor collapsed.",
        "correct": false
      },
      "C": {
        "text": "Quit your job and become a house flipper influencer",
        "response": "At least your content will outlive your portfolio.",
        "correct": false
      }
    },
    "education": "The housing bubble grew rapidly before peaking in 2006. It later triggered the 2008 crisis."
  },
  {
    "year": 2010,
    "event": "Flash Crash",
    "setup": "May 6, 2010. Markets suddenly drop nearly 1,000 points in minutes.",
    "answers": {
      "A": {
        "text": "Do nothing  it's a glitch",
        "response": "You kept calm while others fat-fingered into panic.",
        "correct": true
      },
      "B": {
        "text": "Sell everything  the end is nigh",
        "response": "You sold the bottom of a 30-minute error.",
        "correct": false
      },
      "C": {
        "text": "Try to short Apple via your toaster",
        "response": "Your kitchen appliance rejected the trade. Smart.",
        "correct": false
      }
    },
    "education": "The 2010 Flash Crash was caused by a trading algorithm and panic. Markets quickly rebounded."
  },
  {
    "year": 2017,
    "event": "Crypto Bubble",
    "setup": "Bitcoin is near $20,000. Everyone is launching an ICO.",
    "answers": {
      "A": {
        "text": "Take profits and scale out",
        "response": "You left the party before the lights turned off.",
        "correct": true
      },
      "B": {
        "text": "Buy more  it's going to $1 million",
        "response": "You believed. Your wallet suffered.",
        "correct": false
      },
      "C": {
        "text": "Create your own coin backed by soda caps",
        "response": "Original. Completely worthless. But original.",
        "correct": false
      }
    },
    "education": "Bitcoin and altcoins crashed hard in early 2018, with many losing 8090% of value."
  },
  {
    "year": 2023,
    "event": "AI Stock Boom",
    "setup": "ChatGPT just went viral. AI stocks are rallying fast.",
    "answers": {
      "A": {
        "text": "Ride the momentum, but with stops",
        "response": "Smart exposure. You surfed the trend, not drowned in it.",
        "correct": true
      },
      "B": {
        "text": "Short AI  its all hype",
        "response": "You fought the bots... and the bots won.",
        "correct": false
      },
      "C": {
        "text": "Ask ChatGPT for stock tips and invest blindly",
        "response": "Bold strategy. Questionable accountability.",
        "correct": false
      }
    },
    "education": "AI stocks like Nvidia surged in 2023 following generative AI breakthroughs."
  },
  {
    "year": 2006,
    "event": "Pre-2008 Housing Warning Signs",
    "setup": "CDOs and mortgage lending are booming. Some are starting to raise concerns.",
    "answers": {
      "A": {
        "text": "Bet against the housing market",
        "response": "You saw the cracks early. Big Short energy.",
        "correct": true
      },
      "B": {
        "text": "Buy property with zero-down loans",
        "response": "And now you own a foreclosure.",
        "correct": false
      },
      "C": {
        "text": "Open a real estate school on MySpace",
        "response": "A digital diploma in disaster.",
        "correct": false
      }
    },
    "education": "CDOs and lax lending drove a massive housing bubble that burst catastrophically in 2008."
  },
  {
    "year": 1992,
    "event": "Black Wednesday",
    "setup": "George Soros is shorting the British pound. The UK is defending its currency peg.",
    "answers": {
      "A": {
        "text": "Short the pound with Soros",
        "response": "You joined the raid and made a fortune.",
        "correct": true
      },
      "B": {
        "text": "Trust the Bank of England  stay long",
        "response": "You backed the Bank. It broke.",
        "correct": false
      },
      "C": {
        "text": "Convert everything to Beefeater gin",
        "response": "Not liquid assets in the way you hoped.",
        "correct": false
      }
    },
    "education": "On Black Wednesday, the UK exited the ERM and the pound plummeted. Soros reportedly made $1 billion."
  },
  {
    "year": 1994,
    "event": "Bond Market Massacre",
    "setup": "The Fed unexpectedly raises rates. Bonds tank. Markets are rattled.",
    "answers": {
      "A": {
        "text": "Reduce bond exposure immediately",
        "response": "You avoided a duration disaster. Clean exit.",
        "correct": true
      },
      "B": {
        "text": "Buy more long-term bonds  yield is tasty",
        "response": "Tasty yield, spicy losses.",
        "correct": false
      },
      "C": {
        "text": "Invest in Beanie Babies instead",
        "response": "You diversified into plush-based delusion.",
        "correct": false
      }
    },
    "education": "In 1994, the Fed hiked aggressively. Bond markets crashed, surprising many investors."
  },
  {
    "year": 2002,
    "event": "Enron Scandal",
    "setup": "Enron's financials are under scrutiny. Rumors of fraud circulate.",
    "answers": {
      "A": {
        "text": "Short Enron before the collapse",
        "response": "You saw through the fake numbers. Sharp.",
        "correct": true
      },
      "B": {
        "text": "Buy the dip  it's a great company",
        "response": "You bought a fantasy. It turned into a felony.",
        "correct": false
      },
      "C": {
        "text": "Apply to Enron's accounting department",
        "response": "You got creative with math. And jail time.",
        "correct": false
      }
    },
    "education": "Enrons fraud led to its 2001 collapse, one of the biggest corporate scandals in history."
  },
  {
    "year": 2012,
    "event": "Facebook IPO",
    "setup": "Facebook is going public. Its hyped. Technical issues plague the launch.",
    "answers": {
      "A": {
        "text": "Wait and watch before buying",
        "response": "You avoided the messy open. Smart patience.",
        "correct": true
      },
      "B": {
        "text": "Buy immediately  this is the next Google",
        "response": "You got in early... to the volatility spiral.",
        "correct": false
      },
      "C": {
        "text": "Send Zuck a friend request with your bank details",
        "response": "He saw it. He declined. Also, that's not investing.",
        "correct": false
      }
    },
    "education": "Facebooks 2012 IPO was marred by technical issues and price volatility. The stock dropped post-launch."
  },
  {
    "year": 2019,
    "event": "Repo Market Spike",
    "setup": "Overnight lending rates spike unexpectedly. The Fed intervenes.",
    "answers": {
      "A": {
        "text": "Brush up on repo markets and monitor liquidity",
        "response": "You actually understood it. Thats rare.",
        "correct": true
      },
      "B": {
        "text": "Panic and sell equities",
        "response": "That spike wasnt the apocalypse you feared.",
        "correct": false
      },
      "C": {
        "text": "Buy repos... whatever those are",
        "response": "You now own confusion and some acronyms.",
        "correct": false
      }
    },
    "education": "In 2019, repo rates spiked due to liquidity shortages. The Fed injected funding to stabilize markets."
  },
  {
    "year": 2001,
    "event": "Apple iPod Launch",
    "setup": "Apple announces a new music device. Critics mock it.",
    "answers": {
      "A": {
        "text": "Buy Apple stock  this could be big",
        "response": "You saw innovation before it went mainstream.",
        "correct": true
      },
      "B": {
        "text": "Ignore it  who needs 1,000 songs in a pocket?",
        "response": "Turns out, almost everyone did.",
        "correct": false
      },
      "C": {
        "text": "Invest in CD Walkman manufacturers",
        "response": "Wrong tech, wrong decade.",
        "correct": false
      }
    },
    "education": "The iPod helped turn Apple into a consumer electronics giant, paving the way for the iPhone."
  },
  {
    "year": 2019,
    "event": "WeWork IPO Implosion",
    "setup": "WeWork files for IPO. Its valuation is sky-high. Questions swirl around governance.",
    "answers": {
      "A": {
        "text": "Stay away  the red flags are everywhere",
        "response": "You dodged a SoftBank-sized disaster. Well played.",
        "correct": true
      },
      "B": {
        "text": "Buy in early  office sharing is the future",
        "response": "The future came without profits. Or the IPO.",
        "correct": false
      },
      "C": {
        "text": "Open your own startup called 'MeWork'",
        "response": "At least youre self-aware. Financially, not so much.",
        "correct": false
      }
    },
    "education": "WeWorks IPO collapsed after intense scrutiny. It lost billions in value and its CEO stepped down."
  },
  {
    "year": 2015,
    "event": "Chinese Stock Market Crash",
    "setup": "Chinas stock market soared in 201415. Then panic selling hits hard.",
    "answers": {
      "A": {
        "text": "Get out early  too much froth",
        "response": "You exited before the freefall. Nicely timed.",
        "correct": true
      },
      "B": {
        "text": "Hold on  Beijing will save the day",
        "response": "Hope was not a strategy. Beijing couldnt stop the fall.",
        "correct": false
      },
      "C": {
        "text": "Go all-in on panda-themed ETFs",
        "response": "Cute. Catastrophic.",
        "correct": false
      }
    },
    "education": "The Shanghai Composite crashed over 30% in mid-2015 despite government attempts to stop the selloff."
  },
  {
    "year": 2021,
    "event": "Ever Given Suez Canal Blockage",
    "setup": "A massive ship is stuck in the Suez Canal. Global trade halts for days.",
    "answers": {
      "A": {
        "text": "Speculate on rising shipping costs",
        "response": "You monetized maritime misery. Efficient!",
        "correct": true
      },
      "B": {
        "text": "Ignore it  just a boat",
        "response": "Just a boat that disrupted $10 billion of daily trade.",
        "correct": false
      },
      "C": {
        "text": "Buy a mini cargo ship on Etsy",
        "response": "Great desk ornament. No profits, though.",
        "correct": false
      }
    },
    "education": "The Ever Given blocked the Suez Canal in March 2021, severely impacting global supply chains."
  },
  {
    "year": 2008,
    "event": "Gold Price Surge",
    "setup": "Markets are crashing. Panic is everywhere. Gold begins to spike.",
    "answers": {
      "A": {
        "text": "Rotate into gold and gold miners",
        "response": "You fled to safety and got rewarded.",
        "correct": true
      },
      "B": {
        "text": "Stay in equities  its too late to hedge",
        "response": "And you rode the volatility rollercoaster... down.",
        "correct": false
      },
      "C": {
        "text": "Buy chocolate gold coins for psychological comfort",
        "response": "Tasty but not inflation-proof.",
        "correct": false
      }
    },
    "education": "Gold rose sharply during the 2008 financial crisis as a hedge against market panic."
  },
  {
    "year": 2023,
    "event": "Regional Bank Failures",
    "setup": "SVB and other regional banks are collapsing. Government steps in.",
    "answers": {
      "A": {
        "text": "Short regional banks, long big banks",
        "response": "Smart relative play. Safety rotated upward.",
        "correct": true
      },
      "B": {
        "text": "Buy regional banks  bounce incoming",
        "response": "You caught a falling knife. Again.",
        "correct": false
      },
      "C": {
        "text": "Open 47 checking accounts for deposit insurance",
        "response": "Your paperwork is diversified. Your returns? Not so much.",
        "correct": false
      }
    },
    "education": "In 2023, SVB and others collapsed amid rate and liquidity risks. Deposits were backstopped but equity holders were wiped out."
  },
  {
    "year": 2000,
    "event": "AOL-Time Warner Merger",
    "setup": "AOL merges with Time Warner in a massive $165B deal. Media hails it as visionary.",
    "answers": {
      "A": {
        "text": "Stay skeptical  it feels overhyped",
        "response": "You avoided one of the worst mergers in history. Sharp.",
        "correct": true
      },
      "B": {
        "text": "Buy both stocks  this is synergy gold",
        "response": "Turns out, 1 + 1 = disaster.",
        "correct": false
      },
      "C": {
        "text": "Try to merge your Hotmail and MySpace accounts",
        "response": "Congratulations. You've created a digital fossil.",
        "correct": false
      }
    },
    "education": "The AOL-Time Warner merger became a case study in corporate failure and cultural mismatch."
  },
  {
    "year": 2022,
    "event": "Tech Layoff Wave",
    "setup": "Big tech companies begin mass layoffs after overhiring during the boom.",
    "answers": {
      "A": {
        "text": "Rotate into defensive sectors",
        "response": "You prepped for turbulence. Good call.",
        "correct": true
      },
      "B": {
        "text": "Buy tech  this is an overreaction",
        "response": "The overreaction lasted... a while.",
        "correct": false
      },
      "C": {
        "text": "Pitch your startup idea to laid-off devs at Starbucks",
        "response": "Your startup failed. The coffee was good though.",
        "correct": false
      }
    },
    "education": "Following the 202021 boom, major tech firms cut thousands of jobs amid falling ad revenue and cost cutting."
  },
  {
    "year": 1995,
    "event": "Netscape IPO",
    "setup": "Netscape just IPO'd. It doubled on day one. The internet is going public.",
    "answers": {
      "A": {
        "text": "Ride the momentum  this is a new era",
        "response": "You caught the wave before it became a tsunami.",
        "correct": true
      },
      "B": {
        "text": "Wait  seems like a bubble forming",
        "response": "You were cautious. And missed a legendary rally.",
        "correct": false
      },
      "C": {
        "text": "Invest in fax machines instead  reliable tech",
        "response": "You zigged when the world zagged into the future.",
        "correct": false
      }
    },
    "education": "Netscapes 1995 IPO is seen as the beginning of the dotcom boom, igniting investor interest in internet stocks."
  },
  {
    "year": 2016,
    "event": "Trump Election Shock",
    "setup": "Trump wins the U.S. presidency. Futures crash overnight. Markets panic.",
    "answers": {
      "A": {
        "text": "Buy the panic dip",
        "response": "You zigged when others zagged. Market rebounded fast.",
        "correct": true
      },
      "B": {
        "text": "Sell everything  this is chaos",
        "response": "You sold the bottom... again.",
        "correct": false
      },
      "C": {
        "text": "Invest in political meme stocks",
        "response": "You now own shares in confusion and sarcasm.",
        "correct": false
      }
    },
    "education": "Despite overnight panic, U.S. markets rallied sharply post-election, especially in financial and industrial sectors."
  },
  {
    "year": 1990,
    "event": "Japanese Asset Bubble Bursts",
    "setup": "Japan's real estate and stock markets are insanely high. Some say it's unsustainable.",
    "answers": {
      "A": {
        "text": "Short Japanese equities",
        "response": "You caught the fall of the Nikkei. Solid global macro call.",
        "correct": true
      },
      "B": {
        "text": "Buy Tokyo property  cant go wrong",
        "response": "It did go wrong. For decades.",
        "correct": false
      },
      "C": {
        "text": "Open a sushi restaurant on Mt. Fuji",
        "response": "Culturally rich. Financially poor.",
        "correct": false
      }
    },
    "education": "Japans bubble burst in 1990 led to decades of stagnation. The Nikkei still hasnt recovered its peak from that time."
  },
  {
    "year": 2004,
    "event": "Google IPO",
    "setup": "Google is going public using a Dutch auction. Some call it overvalued.",
    "answers": {
      "A": {
        "text": "Buy in  this company is the future",
        "response": "You bought into innovation. Big win.",
        "correct": true
      },
      "B": {
        "text": "Skip it  search engines are a fad",
        "response": "Turns out search isnt going away.",
        "correct": false
      },
      "C": {
        "text": "Invest in Ask Jeeves instead",
        "response": "Jeeves retired. Your portfolio joined him.",
        "correct": false
      }
    },
    "education": "Googles 2004 IPO was successful, and its stock has since delivered massive returns."
  },
  {
    "year": 2020,
    "event": "Vaccine Announcement Market Rally",
    "setup": "Pfizer announces COVID vaccine results. Futures soar overnight.",
    "answers": {
      "A": {
        "text": "Rotate into reopening plays",
        "response": "Smart pivot. You caught the rotation to value and travel.",
        "correct": true
      },
      "B": {
        "text": "Stick with stay-at-home stocks",
        "response": "That trend was fading fast.",
        "correct": false
      },
      "C": {
        "text": "Buy hazmat suits in bulk",
        "response": "Too late. Costco already beat you to it.",
        "correct": false
      }
    },
    "education": "Pfizers announcement in Nov 2020 triggered a sharp market rally, particularly in travel, banks, and energy."
  },
  {
    "year": 1997,
    "event": "Dotcom Hype Ramps Up",
    "setup": "Tech IPOs are surging. New internet companies appear weekly.",
    "answers": {
      "A": {
        "text": "Ride the hype with a tight exit plan",
        "response": "You surfed the bubble with style.",
        "correct": true
      },
      "B": {
        "text": "Ignore it  tech is a niche trend",
        "response": "Tech became the world. You missed the memo.",
        "correct": false
      },
      "C": {
        "text": "Register coolwebsitedotcom.com and retire",
        "response": "You spent $35 and got nothing but spam.",
        "correct": false
      }
    },
    "education": "Late 1990s saw explosive growth in internet IPOs, laying the groundwork for the 2000 bubble."
  },
  {
    "year": 2013,
    "event": "Taper Tantrum",
    "setup": "The Fed hints at reducing bond purchases. Markets shiver.",
    "answers": {
      "A": {
        "text": "Reduce bond exposure and shift to cash",
        "response": "You front-ran the taper panic. Smooth move.",
        "correct": true
      },
      "B": {
        "text": "Double down on bonds  rates wont rise fast",
        "response": "Hope meets higher yields and losses.",
        "correct": false
      },
      "C": {
        "text": "Write buy the dip on your forehead",
        "response": "Effective branding. Ineffective strategy.",
        "correct": false
      }
    },
    "education": "The Fed's 2013 taper announcement spooked markets, leading to a sharp rise in yields and global volatility."
  },
  {
    "year": 1,
    "event": "Time Decay on OTM Call",
    "setup": "A stock is at $100. A call with a $105 strike expiring in 2 weeks is trading at $3.50. IV is high.",
    "answers": {
      "A": {
        "text": "Realize it's mostly extrinsic value and time decay will be brutal  skip it",
        "response": "Big brain. You dodged the theta drain and stayed liquid.",
        "correct": true
      },
      "B": {
        "text": "Buy it  its only $3.50, and the stock just needs to move up a bit",
        "response": "Hope is not a strategy. The clock is the enemy here.",
        "correct": false
      },
      "C": {
        "text": "Buy 100 of them and text your boss 'Im rich' in advance",
        "response": "Bold. Now explain to your boss why youre actually working overtime.",
        "correct": false
      }
    },
    "education": "With only two weeks to expiry, extrinsic value decays fast, especially on OTM options. Youd need a big move quickly to profit."
  },
  {
    "year": 2,
    "event": "Earnings Volatility Trap",
    "setup": "A stock is about to report earnings. You consider buying a straddle (same strike call and put) due to high implied volatility.",
    "answers": {
      "A": {
        "text": "Only buy it if you expect a move larger than the implied move",
        "response": "Correct. You win only if the real move beats expectations.",
        "correct": true
      },
      "B": {
        "text": "Straddles always win during earnings",
        "response": "Not always. IV crush can kill both legs.",
        "correct": false
      },
      "C": {
        "text": "Just buy both and hope for drama",
        "response": "Premiums: paid. Outcome: neutralized.",
        "correct": false
      }
    },
    "education": "Straddles benefit from large moves, but high IV before earnings often leads to an IV crush afterward. The actual move must exceed whats priced in."
  },
  {
    "year": 3,
    "event": "Delta Misunderstanding",
    "setup": "You buy a call option with a delta of 0.30. The stock moves up $1. You expect big gains.",
    "answers": {
      "A": {
        "text": "Understand you only gain ~$0.30 per $1 move in the stock",
        "response": "Well done. You grasp delta's partial sensitivity.",
        "correct": true
      },
      "B": {
        "text": "Expect to double your premium immediately",
        "response": "Options math doesn't work like that.",
        "correct": false
      },
      "C": {
        "text": "Assume delta means you own 30% of the stock",
        "response": "Nope, thats not how options... or math... works.",
        "correct": false
      }
    },
    "education": "Delta represents the option's sensitivity to a $1 move in the underlying. A delta of 0.30 means the option value moves ~30 cents per $1."
  },
  {
    "year": 4,
    "event": "Selling Naked Puts",
    "setup": "You sell a naked put on a stable stock. Premium collected is $2. Strike is $95. Stock is at $100.",
    "answers": {
      "A": {
        "text": "Accept the obligation to buy at $95 and hope to keep the premium",
        "response": "Good grasp. You're being paid to take potential ownership.",
        "correct": true
      },
      "B": {
        "text": "Expect to profit no matter what happens",
        "response": "Nothing is risk-free. Stock can always drop hard.",
        "correct": false
      },
      "C": {
        "text": "Forget you sold the put and max out your margin elsewhere",
        "response": "Youre now overleveraged and undereducated.",
        "correct": false
      }
    },
    "education": "Selling naked puts obligates you to buy the stock at the strike. You profit if it stays above strike, but losses grow if it falls far."
  },
  {
    "year": 5,
    "event": "Theta and Time Value",
    "setup": "You're comparing a 30-day and a 5-day OTM call option. Both are at the same strike. Which decays faster?",
    "answers": {
      "A": {
        "text": "The 5-day option loses value much faster due to high theta",
        "response": "Exactly. Time decay accelerates as expiration nears.",
        "correct": true
      },
      "B": {
        "text": "They decay at the same rate  time is time",
        "response": "Options time is not linear. Theta disagrees.",
        "correct": false
      },
      "C": {
        "text": "Time decay? Just hold forever",
        "response": "Spoiler: it expires whether you believe in time or not.",
        "correct": false
      }
    },
    "education": "Theta increases as expiry approaches. Short-dated options lose extrinsic value much faster than long-dated ones."
  },
  {
    "year": 6,
    "event": "Buying Weekly Calls on High IV",
    "setup": "Youre eyeing weekly calls on a meme stock ahead of a major news event. IV is sky-high.",
    "answers": {
      "A": {
        "text": "Realize IV crush will nuke your premium if the move disappoints",
        "response": "You know the game. Theta + IV crush = portfolio wrecking ball.",
        "correct": true
      },
      "B": {
        "text": "Buy them anyway  this thing moves hard",
        "response": "Maybe. But your premium just got priced like a Rolex at a pawn shop.",
        "correct": false
      },
      "C": {
        "text": "YOLO the entire paycheck  moon or doom, baby",
        "response": "Welcome to the financial hunger games.",
        "correct": false
      }
    },
    "education": "High IV inflates options premiums. If the stock doesnt move *enough*, those options implode post-news."
  },
  {
    "year": 7,
    "event": "Covered Call Misunderstanding",
    "setup": "You write a covered call on a stock you own. It rockets 25% overnight.",
    "answers": {
      "A": {
        "text": "Accept that you capped your upside  thats the tradeoff",
        "response": "You took income over moonshots. Thats called discipline.",
        "correct": true
      },
      "B": {
        "text": "Complain you didn't get to ride the rocket",
        "response": "Thats why its called a *covered* call, not an *unlimited dreams* call.",
        "correct": false
      },
      "C": {
        "text": "Write angry emails to the options gods",
        "response": "They read them. They laughed.",
        "correct": false
      }
    },
    "education": "Covered calls limit upside beyond the strike price in exchange for income. You trade moonshots for premiums."
  },
  {
    "year": 8,
    "event": "Buying Deep ITM Calls",
    "setup": "Youre choosing between an ATM call and a deep ITM call with high delta (~0.9) and low extrinsic value.",
    "answers": {
      "A": {
        "text": "Buy the deep ITM call for high delta and stock-like exposure",
        "response": "Nice. You just rented stock exposure at a discount.",
        "correct": true
      },
      "B": {
        "text": "Avoid it  low premium means low reward",
        "response": "Thats the opposite of how this works.",
        "correct": false
      },
      "C": {
        "text": "Look for an even deeper ITM call expiring in 15 minutes",
        "response": "Youve invented the options version of skydiving with no parachute.",
        "correct": false
      }
    },
    "education": "Deep ITM calls with high delta behave like stock substitutes and are more efficient than buying shares outright, with lower capital outlay."
  },
  {
    "year": 9,
    "event": "Rolling Options Gone Wrong",
    "setup": "Your short put is ITM. You try to roll it to next week at the same strike... for a debit.",
    "answers": {
      "A": {
        "text": "Realize youre paying to extend a bad position  rethink it",
        "response": "Smart. Sometimes rolling just digs the hole deeper.",
        "correct": true
      },
      "B": {
        "text": "Roll it! Eventually itll bounce. Right?",
        "response": "Hope is not a hedging strategy.",
        "correct": false
      },
      "C": {
        "text": "Keep rolling forever. Youre now an option-slinger for life",
        "response": "Youve become the financial version of Groundhog Day.",
        "correct": false
      }
    },
    "education": "Rolling for a debit extends risk without improving reward. It may make sense, but its not a magic fix  rethink your thesis."
  },
  {
    "year": 10,
    "event": "Assignment Confusion",
    "setup": "You wrote a put and the stock dropped below the strike. You're assigned over the weekend.",
    "answers": {
      "A": {
        "text": "Accept you now own the stock  that was always the risk",
        "response": "Exactly. You sold insurance. Now you're paying the claim.",
        "correct": true
      },
      "B": {
        "text": "Call your broker and demand a refund",
        "response": "They said 'lol no.' Then muted your account.",
        "correct": false
      },
      "C": {
        "text": "Threaten legal action against theta",
        "response": "Nice try. The Greeks have lawyers too.",
        "correct": false
      }
    },
    "education": "Writing puts means you may be assigned and must buy shares at strike. Know the risk and manage capital accordingly."
  },
  {
    "year": 11,
    "event": "Gamma Squeeze",
    "setup": "A heavily shorted stock starts to rally. Call buying accelerates, and market makers begin hedging aggressively.",
    "answers": {
      "A": {
        "text": "Recognize a gamma squeeze and ride the momentum with tight risk controls",
        "response": "You saw the hedging spiral in action. Nice timing.",
        "correct": true
      },
      "B": {
        "text": "Short it  no way this irrational rally continues",
        "response": "And then you learned the phrase infinite risk.",
        "correct": false
      },
      "C": {
        "text": "Gamma? Isn't that a Marvel character?",
        "response": "Yes. And you're the hero of your own margin call.",
        "correct": false
      }
    },
    "education": "In gamma squeezes, dealers buy stock to hedge calls they sold. That buying fuels more upside in a feedback loop."
  },
  {
    "year": 12,
    "event": "Credit Spread Misjudgment",
    "setup": "You sell a $5-wide credit spread for $0.50 on a volatile stock, thinking its safe income.",
    "answers": {
      "A": {
        "text": "Understand your max loss is $4.50 for $0.50 reward  rethink the R:R",
        "response": "Smart risk awareness. Dont collect pennies in front of a steamroller.",
        "correct": true
      },
      "B": {
        "text": "Its fine  the stock will probably stay above the strike",
        "response": "Probability isnt the same as protection.",
        "correct": false
      },
      "C": {
        "text": "Sell 20 more of them and call it passive income",
        "response": "Its only passive until the margin call screams.",
        "correct": false
      }
    },
    "education": "Credit spreads offer limited profit but carry significant downside. Dont ignore the asymmetric risk/reward."
  },
  {
    "year": 13,
    "event": "Iron Condor in Low IV",
    "setup": "You open an iron condor on a stock with very low implied volatility.",
    "answers": {
      "A": {
        "text": "Realize low IV = low premium = not worth the risk",
        "response": "Correct. You cant sell air for a nickel and call it alpha.",
        "correct": true
      },
      "B": {
        "text": "Condors always work  just stay range-bound",
        "response": "Tell that to the market the day it gaps 12%.",
        "correct": false
      },
      "C": {
        "text": "Just do it for the thrill of drawing triangles on charts",
        "response": "Geometry won't save you. Ask any architect in a crash.",
        "correct": false
      }
    },
    "education": "Iron condors rely on selling volatility. In low IV environments, premiums are too small to justify the risk."
  },
  {
    "year": 14,
    "event": "Calendar Spread Confusion",
    "setup": "You buy a calendar spread (sell short-term, buy longer-term option) expecting IV to rise.",
    "answers": {
      "A": {
        "text": "Use it when you expect sideways movement and IV expansion",
        "response": "Perfect use case. Theta + IV edge.",
        "correct": true
      },
      "B": {
        "text": "Use it when you expect a breakout move",
        "response": "Breakouts kill calendars. Pick another tool.",
        "correct": false
      },
      "C": {
        "text": "Think it involves organizing your trading calendar",
        "response": "Thats a Google product, not a trading strategy.",
        "correct": false
      }
    },
    "education": "Calendar spreads profit from time decay differences and IV increases. They suffer if price moves too far from the strike."
  },
  {
    "year": 15,
    "event": "Ratio Spread Pitfall",
    "setup": "You sell 2 calls and buy 1 at a lower strike, collecting a credit. Stock begins to moon.",
    "answers": {
      "A": {
        "text": "Realize you now have unlimited upside risk  time to manage",
        "response": "Youre a realist. Manage or hedge, fast.",
        "correct": true
      },
      "B": {
        "text": "Let it ride  what could possibly go wrong?",
        "response": "Answer: everything. Margin calls included.",
        "correct": false
      },
      "C": {
        "text": "Tell yourself the second call was a typo",
        "response": "Sadly, the market respects your fill, not your feelings.",
        "correct": false
      }
    },
    "education": "Ratio spreads involve asymmetric risk. If the underlying surges, the naked leg exposes you to unlimited losses."
  },
  {
    "year": 16,
    "event": "LEAPS vs Short-Term Options",
    "setup": "Youre bullish long-term on a stock. Youre debating between buying LEAPS or short-dated calls.",
    "answers": {
      "A": {
        "text": "Use LEAPS  lower theta burn and long exposure",
        "response": "Nice. You went long without lighting your cash on fire.",
        "correct": true
      },
      "B": {
        "text": "Short-dated calls always give better ROI",
        "response": "Not when theta eats your lunch before the move happens.",
        "correct": false
      },
      "C": {
        "text": "Flip a coin  the market loves chaos",
        "response": "Your strategy just got downgraded to 'gambling'.",
        "correct": false
      }
    },
    "education": "LEAPS offer long-term exposure with minimal time decay compared to short-term options that suffer heavy theta decay."
  },
  {
    "year": 17,
    "event": "Put-Call Parity",
    "setup": "You see a put trading at a different value than the call + stock equivalent. Something feels off.",
    "answers": {
      "A": {
        "text": "Exploit the arbitrage  put-call parity is misaligned",
        "response": "Arbitrage alert! You're trading like a market-maker now.",
        "correct": true
      },
      "B": {
        "text": "Ignore it  puts and calls arent related",
        "response": "Theyre literally two sides of the same math.",
        "correct": false
      },
      "C": {
        "text": "Call your astrologer for confirmation",
        "response": "Your broker is concerned. So is your horoscope.",
        "correct": false
      }
    },
    "education": "Put-call parity links calls, puts, and stock via pricing formulas. Discrepancies can allow arbitrage trades in efficient markets."
  },
  {
    "year": 18,
    "event": "Theta Farming Gone Wrong",
    "setup": "You sell weekly options every Friday for income. One Monday, the market gaps big.",
    "answers": {
      "A": {
        "text": "Accept the risk of selling short-term options includes gap exposure",
        "response": "You knew the game. Premium has a price.",
        "correct": true
      },
      "B": {
        "text": "Be shocked the market didn't respect your calendar",
        "response": "Monday had other plans. Your P&L is crying.",
        "correct": false
      },
      "C": {
        "text": "Blame astrology and the full moon",
        "response": "Saturn isnt in charge of your margin calls.",
        "correct": false
      }
    },
    "education": "Short-term option selling is attractive for theta, but it carries large event and gap risk over weekends."
  },
  {
    "year": 19,
    "event": "Understanding Vega",
    "setup": "You buy an option on a low IV stock expecting a volatility event. What do you care about most?",
    "answers": {
      "A": {
        "text": "Vega  because IV changes will move your option",
        "response": "You speak Greek. Thats vega-smart.",
        "correct": true
      },
      "B": {
        "text": "Delta  because direction is all that matters",
        "response": "Direction matters, but volatility can eat your alpha.",
        "correct": false
      },
      "C": {
        "text": "Zeta  the secret Greek Wall Street wont tell you about",
        "response": "Zeta is a frat, not an options metric.",
        "correct": false
      }
    },
    "education": "Vega measures sensitivity to implied volatility. If you expect IV to rise, long vega positions benefit."
  },
  {
    "year": 20,
    "event": "Early Assignment Confusion",
    "setup": "Youre short a deep ITM call with little time left. The stock pays a dividend tomorrow.",
    "answers": {
      "A": {
        "text": "Expect to be assigned early  they want the dividend",
        "response": "Correct. Youre on the hook when its optimal to exercise.",
        "correct": true
      },
      "B": {
        "text": "Itll never happen  people always wait until expiry",
        "response": "Nope. Dividend math says otherwise.",
        "correct": false
      },
      "C": {
        "text": "Hide under your desk and pretend it didnt happen",
        "response": "Hope makes poor hedges.",
        "correct": false
      }
    },
    "education": "Deep ITM options with little extrinsic value and upcoming dividends are often exercised early to capture the dividend."
  },
  {
    "year": 21,
    "event": "Synthetic Long Position",
    "setup": "You want to replicate a long stock position using options with minimal capital outlay.",
    "answers": {
      "A": {
        "text": "Buy a call and sell a put at the same strike  synthetic long",
        "response": "Exactly. Thats textbook synthetic equity exposure.",
        "correct": true
      },
      "B": {
        "text": "Buy two calls to double the gain",
        "response": "And double the theta decay. Great.",
        "correct": false
      },
      "C": {
        "text": "Mail the company a letter asking for shares",
        "response": "Cute. Ineffective.",
        "correct": false
      }
    },
    "education": "A synthetic long position mimics owning stock by combining a long call and a short put at the same strike and expiration."
  },
  {
    "year": 22,
    "event": "Reverse Iron Condor Confusion",
    "setup": "You think a stock is about to make a big move but arent sure in which direction.",
    "answers": {
      "A": {
        "text": "Use a reverse iron condor  long strangle inside short wings",
        "response": "Nice! Youre betting on movement, not direction.",
        "correct": true
      },
      "B": {
        "text": "Sell an iron condor",
        "response": "Thats for betting on no move. Opposite of what you want.",
        "correct": false
      },
      "C": {
        "text": "Buy both calls and puts at random and hope for fireworks",
        "response": "Thats called a donation to the market gods.",
        "correct": false
      }
    },
    "education": "A reverse iron condor profits when the underlying makes a large move up or down  perfect for directional uncertainty with high expected volatility."
  },
  {
    "year": 23,
    "event": "Volatility Skew Awareness",
    "setup": "You notice OTM puts on a stock are much more expensive than OTM calls.",
    "answers": {
      "A": {
        "text": "Recognize put skew  likely due to downside crash risk",
        "response": "Youre seeing the risk pricing in real time. Respect.",
        "correct": true
      },
      "B": {
        "text": "Calls are just cheaper because theyre boring",
        "response": "Nope. Skew is not about vibes.",
        "correct": false
      },
      "C": {
        "text": "File a complaint with the option pricing department",
        "response": "Theyve forwarded it to /dev/null.",
        "correct": false
      }
    },
    "education": "OTM puts often trade with higher IV due to crash risk and hedging demand  this is called volatility skew."
  },
  {
    "year": 24,
    "event": "Rolling Covered Calls Up and Out",
    "setup": "Your stock rallies past your covered call strike. You want to stay in the trade.",
    "answers": {
      "A": {
        "text": "Roll the call up and out to collect more premium and regain upside",
        "response": "Thats a pro move  stay in the game while managing exposure.",
        "correct": true
      },
      "B": {
        "text": "Close everything and swear off options forever",
        "response": "And miss out on the beauty of rolling? Sad.",
        "correct": false
      },
      "C": {
        "text": "Demand the stock come back down to your strike",
        "response": "Markets dont negotiate with stubborn traders.",
        "correct": false
      }
    },
    "education": "Rolling a covered call up and out (to a higher strike and later expiration) allows you to stay in the position while adjusting for stock movement."
  },
  {
    "year": 25,
    "event": "Effect of IV Drop After Earnings",
    "setup": "You bought a straddle before earnings expecting a big move. The move happened, but IV collapsed.",
    "answers": {
      "A": {
        "text": "You forgot IV crush eats premiums even if the move was big",
        "response": "Rookie mistake. Welcome to the earnings grinder.",
        "correct": true
      },
      "B": {
        "text": "Blame the market for not respecting the drama",
        "response": "The market doesnt care about your expectations.",
        "correct": false
      },
      "C": {
        "text": "Try to sue implied volatility for theft",
        "response": "Youd need to subpoena a concept.",
        "correct": false
      }
    },
    "education": "After earnings, implied volatility often collapses. Even a big move may not offset the premium drop  this is the IV crush."
  },
  {
    "year": 26,
    "event": "Understanding Delta Hedging",
    "setup": "Youre a market maker who sold options. The stock moves sharply. Now what?",
    "answers": {
      "A": {
        "text": "Buy/sell stock to offset delta exposure",
        "response": "You hedged like a pro. Stay neutral, stay sane.",
        "correct": true
      },
      "B": {
        "text": "Panic and pray for a reversal",
        "response": "Your hedge strategy is spiritual, not statistical.",
        "correct": false
      },
      "C": {
        "text": "Trade options until the volatility calms itself",
        "response": "Like fighting fire with fireworks.",
        "correct": false
      }
    },
    "education": "Market makers delta-hedge by trading stock against their options book to stay neutral as the underlying moves."
  },
  {
    "year": 27,
    "event": "Understanding the Greeks: Rho",
    "setup": "Youre holding LEAPS and interest rates just went up. What should you expect?",
    "answers": {
      "A": {
        "text": "Your call option values increase slightly due to Rho",
        "response": "Right  Rhos subtle but real, especially for long-dated options.",
        "correct": true
      },
      "B": {
        "text": "Absolutely nothing. Rho is a made-up Greek",
        "response": "It exists. It's just usually ignored like your gym membership.",
        "correct": false
      },
      "C": {
        "text": "Demand a raise from your broker to offset rate changes",
        "response": "Wrong department. Also, not how finance works.",
        "correct": false
      }
    },
    "education": "Rho measures sensitivity to interest rate changes. It impacts long-dated options more than short-term ones."
  },
  {
    "year": 28,
    "event": "Box Spread Abuse",
    "setup": "You hear box spreads are 'risk-free' arbitrage. You go all in using margin.",
    "answers": {
      "A": {
        "text": "Realize it's only 'risk-free' in theory  funding costs matter",
        "response": "Correct. Theory = practice. Margins and rates ruin perfection.",
        "correct": true
      },
      "B": {
        "text": "YOLO full leverage  its a free money machine",
        "response": "And the market just repossessed your keyboard.",
        "correct": false
      },
      "C": {
        "text": "Start pitching your friends on a box-spread pyramid scheme",
        "response": "Sounds illegal. Probably is.",
        "correct": false
      }
    },
    "education": "Box spreads create synthetic loans, and funding costs reduce profitability. They're not free money in practice."
  },
  {
    "year": 29,
    "event": "Gamma Exposure Near Expiry",
    "setup": "Youre long ATM weekly calls on Thursday. The stock starts moving fast.",
    "answers": {
      "A": {
        "text": "Expect your gamma exposure to spike  good for fast moves",
        "response": "Yes! Gamma is your friend when things get wild near expiry.",
        "correct": true
      },
      "B": {
        "text": "Nothing changes  options dont care about days left",
        "response": "Options very much care. Especially at expiry.",
        "correct": false
      },
      "C": {
        "text": "Gamma is just a setting on your TV",
        "response": "Sure. If your TV displays margin calls.",
        "correct": false
      }
    },
    "education": "Gamma increases near expiry for ATM options, making their delta shift rapidly as price moves. Its a double-edged sword."
  },
  {
    "year": 30,
    "event": "When to Avoid Selling Puts",
    "setup": "A biotech stock is awaiting FDA results. IV is through the roof. You consider selling puts.",
    "answers": {
      "A": {
        "text": "Skip it  binary events can crush you regardless of premium",
        "response": "Yes. Premiums fat for a reason  risk is real.",
        "correct": true
      },
      "B": {
        "text": "Go for it  nothing ever goes wrong with biotech",
        "response": "Until it does. Spectacularly.",
        "correct": false
      },
      "C": {
        "text": "Sell puts and prepare your apology tweet",
        "response": "At least youre brand-conscious.",
        "correct": false
      }
    },
    "education": "Binary events like FDA approvals can lead to extreme moves. Selling options before them is high-risk, regardless of premium."
  },
  {
    "year": 31,
    "event": "Implied vs Historical Volatility",
    "setup": "A stocks implied volatility is way higher than its historical volatility. Whats the implication?",
    "answers": {
      "A": {
        "text": "Options are expensive relative to actual movement  consider selling premium",
        "response": "Exactly. The market expects drama, even if history disagrees.",
        "correct": true
      },
      "B": {
        "text": "IV doesnt matter  just buy the dip",
        "response": "IV always matters if you're paying for it.",
        "correct": false
      },
      "C": {
        "text": "Try to calculate volatility using your vibes",
        "response": "Your intuition is not a volatility surface.",
        "correct": false
      }
    },
    "education": "When implied volatility is high relative to realized/historical volatility, it often signals overpriced options and potential premium selling opportunities."
  },
  {
    "year": 32,
    "event": "Poor Mans Covered Call (PMCC)",
    "setup": "You like covered calls but dont want to buy 100 shares. Whats a capital-efficient alternative?",
    "answers": {
      "A": {
        "text": "Use a LEAPS call as a stock proxy and sell shorter-dated calls against it",
        "response": "Efficient and smart  thats the PMCC.",
        "correct": true
      },
      "B": {
        "text": "Write naked calls and hope nobody notices",
        "response": "The market always notices. And charges you interest.",
        "correct": false
      },
      "C": {
        "text": "Open a GoFundMe for stock exposure",
        "response": "Creative. Not tradable.",
        "correct": false
      }
    },
    "education": "A PMCC uses a deep ITM LEAPS call instead of 100 shares, reducing capital while allowing call-writing for premium."
  },
  {
    "year": 33,
    "event": "Theta Decay on Weekends",
    "setup": "You sell weekly options on Friday. Will theta decay over the weekend?",
    "answers": {
      "A": {
        "text": "Yes  weekend time decay is priced in, even if markets are closed",
        "response": "Correct. Time doesnt sleep, even when Wall Street does.",
        "correct": true
      },
      "B": {
        "text": "No  theta pauses on weekends for rest",
        "response": "Thats not how time works, friend.",
        "correct": false
      },
      "C": {
        "text": "It decays faster if Mercury is in retrograde",
        "response": "Youre confusing options Greeks with Greek mythology.",
        "correct": false
      }
    },
    "education": "Theta applies continuously, even on non-trading days. Premium decay reflects time passing, not just trading activity."
  },
  {
    "year": 34,
    "event": "Protective Put Strategy",
    "setup": "You own 100 shares of a volatile stock and want downside protection without selling.",
    "answers": {
      "A": {
        "text": "Buy a put to create a protective hedge",
        "response": "Perfect. Youve created a floor under your gains.",
        "correct": true
      },
      "B": {
        "text": "Close your eyes and hold tight",
        "response": "Blind hope is not a trading strategy.",
        "correct": false
      },
      "C": {
        "text": "Buy a lottery ticket instead  cheaper hedge",
        "response": "Technically true, but definitely dumb.",
        "correct": false
      }
    },
    "education": "Protective puts give downside insurance while keeping upside open. Its like paying a premium for peace of mind."
  },
  {
    "year": 35,
    "event": "Ratio Put Spread",
    "setup": "Youre moderately bearish. You want downside exposure but with reduced upfront cost.",
    "answers": {
      "A": {
        "text": "Use a ratio put spread  buy 1 put, sell 2 lower puts",
        "response": "Smart structure for a controlled bearish move.",
        "correct": true
      },
      "B": {
        "text": "Sell naked puts and pray it tanks slowly",
        "response": "You sold risk. Hope wont help when it plunges.",
        "correct": false
      },
      "C": {
        "text": "Put on a bear costume and short randomly",
        "response": "Fun party trick. Terrible strategy.",
        "correct": false
      }
    },
    "education": "A ratio put spread profits from a moderate decline but exposes you to loss below the breakeven if the stock drops too far."
  },
  {
    "year": 36,
    "event": "Origins of Options in Ancient Greece",
    "setup": "Around 600 BCE, the philosopher Thales used a form of options to profit from olive presses.",
    "answers": {
      "A": {
        "text": "He paid for the right to use presses in advance  a call option-like strategy",
        "response": "Correct. Thales locked in low prices and profited from future demand.",
        "correct": true
      },
      "B": {
        "text": "He shorted olive futures on Mount Olympus",
        "response": "Wrong god, wrong asset class.",
        "correct": false
      },
      "C": {
        "text": "He invented the 'olive put'  a fruit-based hedge",
        "response": "Creative. Totally fake.",
        "correct": false
      }
    },
    "education": "Thales of Miletus secured use of olive presses in advance, profiting when demand spiked  an early form of optionality."
  },
  {
    "year": 37,
    "event": "Chicago Board Options Exchange (CBOE)",
    "setup": "In 1973, standardized options trading began in the U.S. What changed?",
    "answers": {
      "A": {
        "text": "CBOE introduced listed, regulated options contracts with centralized pricing",
        "response": "Exactly. This modernized and democratized options trading.",
        "correct": true
      },
      "B": {
        "text": "Options became free for all traders",
        "response": "Nice dream. Still not reality.",
        "correct": false
      },
      "C": {
        "text": "People started trading on napkins in Chicago bars",
        "response": "Maybe true. But not the milestone.",
        "correct": false
      }
    },
    "education": "The CBOE was the first exchange to list standardized, exchange-traded stock options, bringing transparency and structure to the market."
  },
  {
    "year": 38,
    "event": "Black-Scholes Breakthrough",
    "setup": "In 1973, a model was published that revolutionized options pricing. What was its core innovation?",
    "answers": {
      "A": {
        "text": "It allowed precise valuation of European options using volatility, time, and price",
        "response": "Yes. It brought math to the madness.",
        "correct": true
      },
      "B": {
        "text": "It proved options were a scam",
        "response": "Nope. Quite the opposite.",
        "correct": false
      },
      "C": {
        "text": "It was the first model to include astrology charts",
        "response": "Not unless Black-Scholes moon-rises in Libra.",
        "correct": false
      }
    },
    "education": "The Black-Scholes model allowed traders to quantify fair option prices, changing risk management and derivatives trading forever."
  },
  {
    "year": 39,
    "event": "1987 Crash and Options Trading",
    "setup": "On Black Monday, Oct 19, 1987, markets crashed. How did options markets respond?",
    "answers": {
      "A": {
        "text": "Massive volatility caused market makers to widen spreads and reduce liquidity",
        "response": "Correct. Options pricing broke down under pressure.",
        "correct": true
      },
      "B": {
        "text": "Options volume dropped to zero",
        "response": "Nope. Panic means volume surges.",
        "correct": false
      },
      "C": {
        "text": "Everyone switched to trading tulips",
        "response": "Wrong century, wrong continent.",
        "correct": false
      }
    },
    "education": "The 1987 crash revealed fragility in options pricing and liquidity, eventually leading to innovations like circuit breakers and improved risk models."
  },
  {
    "year": 40,
    "event": "Options During the Dotcom Bubble",
    "setup": "During the late 1990s, options trading exploded alongside tech stocks. What became common?",
    "answers": {
      "A": {
        "text": "Retail traders aggressively used calls for leverage in speculative tech bets",
        "response": "Exactly. Everyone wanted to be a paper millionaire.",
        "correct": true
      },
      "B": {
        "text": "Puts were banned for being negative vibes",
        "response": "Wrong. They were just unpopular.",
        "correct": false
      },
      "C": {
        "text": "Call options were required to enter internet cafes",
        "response": "Now thats just absurd. And hilarious.",
        "correct": false
      }
    },
    "education": "During the dotcom bubble, retail enthusiasm led to widespread use of call options to speculate on tech stocks, contributing to market volatility."
  },
  {
    "year": 41,
    "event": "Options in Tulip Mania (1630s Netherlands)",
    "setup": "During Tulip Mania, wealthy Dutch citizens speculated on tulips using forward contracts and early derivatives.",
    "answers": {
      "A": {
        "text": "These acted like modern options  agreements to buy in the future without obligation",
        "response": "Correct. Tulip madness included proto-options.",
        "correct": true
      },
      "B": {
        "text": "They only traded tulips in cash and clogs",
        "response": "Stylish, but wrong.",
        "correct": false
      },
      "C": {
        "text": "Options were illegal because flowers are pure",
        "response": "Creative. Not accurate.",
        "correct": false
      }
    },
    "education": "During Tulip Mania, many traders used contracts similar to modern call options  agreements to buy later, enabling leveraged speculation."
  },
  {
    "year": 42,
    "event": "Introduction of Weekly Options",
    "setup": "Weekly options were introduced in 2005 and gained popularity quickly. Why?",
    "answers": {
      "A": {
        "text": "They offered short-term traders more flexibility and faster theta decay",
        "response": "Exactly. More decay = more income (and risk).",
        "correct": true
      },
      "B": {
        "text": "People were impatient and allergic to monthly calendars",
        "response": "Funny. Not the actual reason.",
        "correct": false
      },
      "C": {
        "text": "They were a marketing stunt by weekday enthusiasts",
        "response": "Also known as 'nope'.",
        "correct": false
      }
    },
    "education": "Weeklies became popular due to faster decay, targeted hedging, and precise exposure around short-term events like earnings or data releases."
  },
  {
    "year": 43,
    "event": "Volatility Index (VIX) Launch",
    "setup": "In 1993, the CBOE launched the VIX, known as the 'fear index'. What does it represent?",
    "answers": {
      "A": {
        "text": "The markets expectation of near-term volatility based on S&P 500 options",
        "response": "Correct. It quantifies fear and calm.",
        "correct": true
      },
      "B": {
        "text": "The average number of tweets per panic",
        "response": "Sadly no. But maybe one day.",
        "correct": false
      },
      "C": {
        "text": "A measurement of how volatile your roommate is during earnings season",
        "response": "Very real, but not tradable.",
        "correct": false
      }
    },
    "education": "The VIX measures 30-day implied volatility on the S&P 500 and is a common gauge of market fear or complacency."
  },
  {
    "year": 44,
    "event": "Options and the 2008 Financial Crisis",
    "setup": "During the 2008 meltdown, options markets played a key role. What was one critical use?",
    "answers": {
      "A": {
        "text": "Investors used puts to hedge portfolios and express panic",
        "response": "Correct. Puts were the protection of choice.",
        "correct": true
      },
      "B": {
        "text": "Everyone switched to crypto instead",
        "response": "Crypto wasnt ready for its moment yet.",
        "correct": false
      },
      "C": {
        "text": "Options were banned to prevent overthinking",
        "response": "Weird idea. Never happened.",
        "correct": false
      }
    },
    "education": "Puts and volatility instruments like VIX options became crucial during 2008 for hedging against sharp market declines."
  },
  {
    "year": 45,
    "event": "First Use of Black-Scholes on Trading Floors",
    "setup": "In the 1970s, traders began using the Black-Scholes model. How did they do it?",
    "answers": {
      "A": {
        "text": "With handheld calculators and printed tables before spreadsheets existed",
        "response": "Correct. It was quant finance with a clipboard.",
        "correct": true
      },
      "B": {
        "text": "They mentally simulated differential equations",
        "response": "That would be impressive. And false.",
        "correct": false
      },
      "C": {
        "text": "They shouted 'Black-Scholes!' and guessed",
        "response": "Not a viable pricing method, even in the pits.",
        "correct": false
      }
    },
    "education": "Before modern tech, traders used paper tables and calculators to apply Black-Scholes, marking the early days of quant trading."
  },
  {
    "year": 46,
    "event": "Flash Crash of 2010",
    "setup": "On May 6, 2010, the market dropped nearly 1,000 points in minutes. What did options traders learn?",
    "answers": {
      "A": {
        "text": "Liquidity can vanish instantly  spreads widened and pricing broke down",
        "response": "Correct. It was a wake-up call for the entire derivatives market.",
        "correct": true
      },
      "B": {
        "text": "Circuit breakers prevent all market chaos",
        "response": "Nice idea. Not quite reality.",
        "correct": false
      },
      "C": {
        "text": "You should always panic with confidence",
        "response": "Confidence doesn't recover premiums.",
        "correct": false
      }
    },
    "education": "The Flash Crash showed that even modern electronic markets can break, with options liquidity drying up during chaos."
  },
  {
    "year": 47,
    "event": "Rise of Zero-DTE Options",
    "setup": "Recently, zero days-to-expiry (0DTE) options have become extremely popular. Why?",
    "answers": {
      "A": {
        "text": "Traders seek fast leverage and exposure to intraday moves",
        "response": "Correct. It's short-term dopamine... with consequences.",
        "correct": true
      },
      "B": {
        "text": "People hate commitment",
        "response": "True about relationships, not finance.",
        "correct": false
      },
      "C": {
        "text": "They're free if you trade fast enough",
        "response": "Youve confused trading with shoplifting.",
        "correct": false
      }
    },
    "education": "0DTE options offer high gamma and fast decay, popular with both retail and institutional traders for speculative intraday strategies."
  },
  {
    "year": 48,
    "event": "Options and the COVID Crash",
    "setup": "During the 2020 COVID market crash, what role did options play?",
    "answers": {
      "A": {
        "text": "Volume exploded  traders used puts and volatility products to hedge and speculate",
        "response": "Correct. Options were the weapon of choice in the chaos.",
        "correct": true
      },
      "B": {
        "text": "All options trading was suspended",
        "response": "Markets never shut down. They just screamed.",
        "correct": false
      },
      "C": {
        "text": "People bartered hand sanitizer instead",
        "response": "Useful, but not listed on the CBOE.",
        "correct": false
      }
    },
    "education": "During the March 2020 crash, options volume hit records as traders rushed to hedge, speculate, or profit from extreme volatility."
  },
  {
    "year": 49,
    "event": "The VIX Spike of 2018 (Volmageddon)",
    "setup": "In February 2018, the VIX suddenly surged. What happened to short volatility products?",
    "answers": {
      "A": {
        "text": "Inverse VIX ETFs like XIV collapsed nearly 100% overnight",
        "response": "Exactly. Volatility shorts got demolished.",
        "correct": true
      },
      "B": {
        "text": "They gained value from the panic",
        "response": "Inverse means... the opposite.",
        "correct": false
      },
      "C": {
        "text": "They converted into crypto tokens automatically",
        "response": "You wish. The tokens would've performed better.",
        "correct": false
      }
    },
    "education": "XIV and other short-volatility instruments were wiped out as the VIX more than doubled in a day, exposing risk in complex products."
  },
  {
    "year": 50,
    "event": "Reddit and the 2021 Options Frenzy",
    "setup": "In January 2021, GameStop exploded due to a short squeeze fueled by retail traders. What was options role?",
    "answers": {
      "A": {
        "text": "Massive call buying forced market makers to hedge by buying stock, accelerating the squeeze",
        "response": "Correct. This was gamma squeeze 101  with memes.",
        "correct": true
      },
      "B": {
        "text": "Puts were outlawed on Reddit",
        "response": "Only socially, not legally.",
        "correct": false
      },
      "C": {
        "text": "GME was traded via Pokemon cards",
        "response": "Not yet. But probably soon.",
        "correct": false
      }
    },
    "education": "Retail traders buying short-dated calls forced dealers to buy stock to hedge delta exposure, which helped drive the price higher  a classic gamma squeeze."
  }
];