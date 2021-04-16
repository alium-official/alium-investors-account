import NFT_ABI from './nft-private-seller.json'
import NFT_COLLECTIBLE_ABI from "./collectible.json"

const NFT_PRIVATE_ADDRESS: any = process.env.REACT_APP_NFT_PRIVATE_ADDRESS;
const NFT_COLLECTIBLE_ADDRESS: any = process.env.REACT_APP_NFT_COLLECTIBLE_ADDRESS;

export { NFT_PRIVATE_ADDRESS, NFT_ABI, NFT_COLLECTIBLE_ADDRESS, NFT_COLLECTIBLE_ABI }
