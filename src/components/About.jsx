import React from 'react';
import Slideshow from '../components/Slideshow';
import { FaGithub } from 'react-icons/fa';

const slides = [
  { image: require('../assets/first.png'), description: 'START: This code scrapes La Liga team statistics from fbref.com, using requests to fetch data and BeautifulSoup to parse and extract URLs for detailed team stats.' },
  { image: require('../assets/second.png'), description: 'This code fetches match data for a La Liga team and reads it into a pandas DataFrame. It then extracts URLs for additional team statistics.' }, 
  { image: require('../assets/third.png'), description: 'Here, I fetched shooting stats for a team, read them into a pandas DataFrame, and merged them with the match data to combine both datasets based on the match date.' },
  { image: require('../assets/fourth.png'), description: 'Then I scraped data across multiple seasons and combined it into a single DataFrame.' },
  { image: require('../assets/fifth.png'), description: 'To use in the future, this code saves the combined data to a CSV file to be used in the predictor.' },
  { image: require('../assets/sixth.png'), description: 'Now, this code will scrape the upcoming matches for all La Liga teams for the 2024-2025 season.' },
  { image: require('../assets/seventh.png'), description: 'Finally, to end the scraping, the code concatenates all 2024-2025 matches into a single DataFrame and saves it to a CSV file to be used to predict the season.' },
  { image: require('../assets/eighth.png'), description: 'First, I loaded match data and calculated rolling averages for team and opponent stats over the last three matches.' },
  { image: require('../assets/ninth.png'), description: 'The code applies the rolling averages to the matches DataFrame and creates a list of predictors.' },
  { image: require('../assets/tenth.png'), description: 'I then used GridSearchCV to find the best hyperparameters, which are used to make predictions and evaluate the model performance using accuracy and precision scores.' },
  { image: require('../assets/eleventh.png'), description: 'The results for the first predictions are printed out here.' },
  { image: require('../assets/twelvth.png'), description: 'Then, to improve our model, I applied SMOTE to handle class imbalance in the training data, then trained a RandomForestClassifier on the resampled data.' },
  { image: require('../assets/thirteenth.png'), description: 'Finally, using our trained model, we apply it to the 2024-2025 matches to see the results.' },
  { image: require('../assets/fourteenth.png'), description: 'Results are stored in a CSV file and then used to make the standings. END!' },
];


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#FAF3E0] text-[#FF4B44] flex flex-col justify-center items-center'>
      <div className='max-w-[1000px] w-full px-8 py-16'>
        <p className='text-3xl font-bold'>This is how I came up with the whole prediction.</p>
        <p className='text-xl mt-4'>Click through to learn my process, and feel free to add or improve the predictor on your own.</p>
        <Slideshow slides={slides} />
        <div className='flex justify-center mt-8'>
          <a 
            href="https://github.com/RazinChoudhury/laliga-predictor" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='flex items-center px-6 py-3 bg-[#FF4B44] text-white rounded-lg hover:bg-[#FF3B3B] transition duration-300'
          >
            <FaGithub className='mr-2' /> View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
