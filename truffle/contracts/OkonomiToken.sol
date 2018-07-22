pragma solidity ^0.4.18;
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";


contract OkonomiToken is  MintableToken, BurnableToken {
    string public name = "OkonomiToken";
    string public symbol = "OKT";
    uint public decimals = 18;
    uint public initialSupply = 100000000 * (10 ** decimals);

    function OkonomiToken() public {
        totalSupply_ = initialSupply;
        balances[msg.sender] = initialSupply;
    }
}