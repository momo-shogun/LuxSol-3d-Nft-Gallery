// src/utils/fetchNFTs.js
export const fetchNFTs = async (walletAddress) => {
  try {
    const response = await fetch(
      `https://eth-mainnet.g.alchemy.com/nft/v3/LOhFHVWCZP6_jevw1PxtuWqUe0a5WI8N/getNFTsForOwner?owner=${walletAddress}&withMetadata=true&pageSize=2`,
    );
    const data = await response.json();
    return data.ownedNfts || [];
  } catch (err) {
    console.error("Error fetching NFTs:", err);
    return [];
  }
};
