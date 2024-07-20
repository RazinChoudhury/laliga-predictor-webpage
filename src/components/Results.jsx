import React from 'react';
import { standings } from '../components/data';

const Results = () => {
  return (
    <div name='results' className='w-full h-auto bg-[#FAF3E0] text-[#333] mt-8'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full'>
          <div className='sm:text-center pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#FF4B44]'>Results</p>
          </div>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Team</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Played</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Wins</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Draws</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Losses</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Points</th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {standings.map((team, index) => (
                  <tr key={index}>
                    <td className='px-6 py-4 whitespace-nowrap text-gray-700'>{team.team}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-gray-700'>{team.played}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-gray-700'>{team.wins}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-gray-700'>{team.draws}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-gray-700'>{team.losses}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-gray-700'>{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
