
import { FC } from 'react';
import { NftMinter } from '../../components/NftMinter';


export const HomeView: FC = ({ }) => {

  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#CD5C5C] to-[#FF5733]">
          D-O-G-G HUB
        </h1>        
          <div className="text-center">
          <NftMinter/>
        </div>
      </div>
    </div>
  );
};
