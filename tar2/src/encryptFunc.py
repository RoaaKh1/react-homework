import re

BLOCK_SIZE = 16 # Define block size

def encrypt(input_text):
    
    input_len = len(input_text)
    # Check for 5 or more identical consecutive characters
    if re.search(r'(.)\1{4,}', input_text):
        return "Error: Input contains more than 4 identical consecutive characters.", [] 
    encrypted_chars = [] # List to hold encrypted characters (for the final string)
    encrypted_ascii_values = [] # List to hold the resulting ASCII numbers
    
    # Iterate through the input in blocks of BLOCK_SIZE
    for i in range(0, input_len, BLOCK_SIZE):
        
        block = input_text[i:i + BLOCK_SIZE]
        # Iterate over characters in the current block
        for j, char in enumerate(block):
            
            # Calculate global position (starts at 1)
            k = i + j + 1
            # Get ASCII value of the character
            ascii_val = ord(char)
            # Apply encryption formula: ASCII + position
            encrypted_ascii_val = ascii_val + k
            # Save the ASCII number to the list
            encrypted_ascii_values.append(encrypted_ascii_val)
            # Convert the new ASCII value back to a character
            encrypted_char = chr(encrypted_ascii_val)
            encrypted_chars.append(encrypted_char)

    # Return the encrypted string and the list of ASCII numbers
    return "".join(encrypted_chars), encrypted_ascii_values

# --- Execution Example ---
plaintext_example = "hellofromroaakh1" # Length 16
encrypted_string, encrypted_ascii_list = encrypt(plaintext_example)

print(f"Input: {plaintext_example}")
print(f"Encrypted String: {encrypted_string}")
print(f"Encrypted ASCII Values: {encrypted_ascii_list}")