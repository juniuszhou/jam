
interface IERC20 {
    // Get the total token supply
    function name() external view returns (string memory);

    // Get the total token supply
    function symbol() external view returns (string memory);

    // Get the total token supply
    function decimals() external view returns (uint256);

    // Get the total token supply
    function totalSupply() external view returns (uint256);

    // Get the token balance of an account
    function balanceOf(address account) external view returns (uint256);

    // Get the amount of tokens approved for spending by another address
    function allowance(
        address owner,
        address spender
    ) external view returns (uint256);

    // Transfer tokens to a specified address
    function transfer(
        address recipient,
        uint256 amount
    ) external returns (bool);
    
    // Approve a third party to spend tokens from your account
    function approve(address spender, uint256 amount) external returns (bool);

    // Transfer tokens from one address to another within the approved allowance
    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

     function mint(
        uint256 amount
    ) external returns (bool);
}

contract SimpleERC20 {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 _initialSupply
    ) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = _initialSupply * (10 ** uint256(_decimals));
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(
        address _to,
        uint256 _value
    ) public returns (bool success) {
        require(_to != address(0), "Invalid address");
        require(balanceOf[msg.sender] >= _value, "Insufficient balance");

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(
        address _spender,
        uint256 _value
    ) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool success) {
        require(_from != address(0), "Invalid address");
        require(_to != address(0), "Invalid address");
        require(balanceOf[_from] >= _value, "Insufficient balance");
        require(allowance[_from][msg.sender] >= _value, "Allowance exceeded");

        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }
}