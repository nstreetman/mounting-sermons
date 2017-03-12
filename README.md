# Proper Authentication

### Hashing v Encryption
#### Encryption
- password encrypted thru private key
- if db is compromised and if private key for decrypting is compromised then password is accessible

#### Hash 
- password guess run through hashing algorithm to see if equal to hash value stored
- Hash + Time === Key Derivation Function
  + bcrypt
    - hashing function
    - accumulative hashing rounds
	 - implements salt w/ high entropy
