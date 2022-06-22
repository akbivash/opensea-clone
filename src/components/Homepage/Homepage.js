import React from 'react'
import { BsPlayCircleFill } from 'react-icons/bs'
import { FiInfo } from 'react-icons/fi'
import './Homepage.css'
const Homepage = () => {
    return (
        <div className="homepage">
            <div className="left">
               <div> <h2>Discover, collect, and sell extraordinary NFTs</h2>
                <h4>BivWeb is the world's most popular and fast growing NFT marketplace</h4>
                <div className="btns">
                    <button className='explore'>Explore</button>
                    <button className='create'>Create</button>
                </div>
                <h4 className='learn-more'><i><BsPlayCircleFill/></i><span>Learn more about BivWeb</span></h4>
                </div>
            </div>
            {/* end of left  */}
            <div className="right">

                <div className="nft-container">
<div className="nft-image">
<img src="https://img.seadn.io/files/ed6842ed54e48836203641b326aa381f.jpg?fit=max&auto=format&h=600" alt="" />

 </div>  
                    <div className="nft-details">

                        <div className="author-details">
                            <img src="https://lh3.googleusercontent.com/7HpEUPMweyaqB9BU_8JpgfdM7BiDxrG8PyN-21PejG7-eNCKVa1E_gwZ7KBDT_nh6S6oAiSoU0AiCRxN7JKGhb4oQnZ8_TZr6dto2A=w600" alt="" />

                            <div className='names'>
                                <h4>Pugger</h4>
                                <h5>by Pugger</h5>
                            </div>
                        </div>

                        <i className='info'><FiInfo /></i>

                    </div>

                    {/* end of nft details  */}


                </div>
                {/* end of nft contaienr  */}

            </div>

            {/* end of right  */}
            <h4 className='learn-more-mobile'><i><BsPlayCircleFill/></i><span>Learn more about BivWeb</span></h4>

        </div>

        // end of homepage 
    )
}

export default Homepage