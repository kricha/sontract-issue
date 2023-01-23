// Define the version of Solidity to use for this Smart Contract
// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "hardhat/console.sol";

// Define our Smart Contract
contract ttt is Ownable, Pausable {
    struct MultiSendRequest{
        address to;
        uint256 amount;
    }

    function pause() public onlyOwner whenNotPaused {
        _pause();
    }

    function unpause() public onlyOwner whenPaused {
        _unpause();
    }

    function execute2(IERC20 _token, address[] memory _recipients, uint256[] memory _amounts) external {
        
        require(_recipients.length == _amounts.length, "Invalid recipient and amount arrays");
        for (uint256 i = 0; i < _recipients.length; i++) {
            console.log(_token.allowance(msg.sender, address(this)));
            // _token.transferFrom(msg.sender, _recipients[i], _amounts[i]);
            _token.transfer(_recipients[i], _amounts[i]);
        }
    }


    function getWhenPaused() external view whenPaused returns (string memory) {
        return '123';
    }

    function getWhenNotPaused() external view whenNotPaused returns (string memory) {
        return '345';
    }
}