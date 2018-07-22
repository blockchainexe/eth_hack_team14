pragma solidity ^0.4.23;
pragma experimental ABIEncoderV2;
import "github.com/OpenZeppelin/zeppelin-solidity/contracts/math/SafeMath.sol";


contract Okonomi {
    
    using SafeMath for uint;
    
    struct Post {
        uint postId;
        uint like;
        uint dislike;
        string station;
        string fromLine;
        string toLine;
    }

    Post[] public posts;

    struct Step {
        uint postId;
        uint stepId;
        string comment;
        string photo;
    }

    Step[] public steps;

    constructor() public {
        steps.push(Step(0, 0, "firstComment", "firstPhot"));
        steps.push(Step(0, 1, "secondComment", "secondPhot"));
        steps.push(Step(0, 2, "thirdComment", "thirdPhot"));

        posts.push(Post(0, 0, 0, "Shibuya", "JR Yamanote", "Keio Inokashira")); 
    }

    function searchPostIds(string _station, string _fromLine, string _toLine) public view returns (uint[]) {
        
        uint[] postIds;
        
        for (uint i = 0; i < posts.length; i++) {
            if (keccak256(_station) == keccak256(posts[i].station)
                && keccak256(_fromLine) == keccak256(posts[i].fromLine)
                && keccak256(_toLine) == keccak256(posts[i].toLine)) {

                postIds.push(posts[i].postId);
            }
        }
                    
        return postIds;
    }
    
    function getPost(uint _postId) public view returns (uint, uint, uint, string, string, string) {
        return (posts[_postId].postId, posts[_postId].like, posts[_postId].dislike, 
            posts[_postId].station, posts[_postId].fromLine, posts[_postId].toLine);
    }

    function getPostIds() public view returns (uint[]) {
        uint[] postIds;
        
        for (uint i = 0; i < posts.length; i++) {
            postIds.push(posts[i].postId);
        }
                    
        return postIds;
    }
    
    function addPost(string _comment, string _photo, string _station, string _fromLine, string _toLine) public {
        
        steps.push(Step(posts.length, steps.length, _comment, _photo));
        posts.push(Post(posts.length, 0, 0, _station, _fromLine, _toLine)); 
    }
    
    function addLike(uint _postId) public {
        require(posts.length > _postId);
        
        posts[_postId].like = posts[_postId].like.add(1);
    }
    
    function addDislike(uint _postId) public {
        require(posts.length > _postId);
        
        posts[_postId].dislike = posts[_postId].dislike.add(1);
    }
    
    
}
