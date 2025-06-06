	[[Security+ Week 2]]  #security
- ## Video 1.1.1: Security Controls 
[[Security+ Week 2]]
	- ### **Preventative
		- Technical Controls
			- Operating systems
			- Firewalls
			- Antivirus
			- Managerial Controls
				- Administrative controls with security design and implementation, these are telling your employees how to use a device securely and helping enforce that.
				- Day to Day aka procedural
			- Operational Controls
				- Controls implemented by people
				- example: Security Guards, awareness programs
			- Physical Controls
	- ### Deterrent 
		- Makes people second guess if they should do what there about to do
			- Examples:
				- Splash Screen when logging into a system
				- Front reception desk
				- warning sighs
	- ### Detective 
		- A way to log an attack, may not prevent or mitigate
			- Examples:
				- Login Reports
				- Regularly patrol an area
				- enable motion detectors
	- ### Corrective 
		- Apply a controller after the event has been enacted, this will mitigate the effects of the attack and create less downtime.
			- Examples:
				- Computer rollback
				- Contact law enforcement to manage criminal activity
				- use a fire extinguisher.
	- ### Compensating 
		- Control using other means, existing controls are note sufficient.
			- Examples:
				- Firewall blocks app with new vulnerability instead of patching the app
				- implement a separation of duties
				- More guards
				- Generator after power outage
	- ### Directive 
		- Direct a subject towards security compliance, this is a weak security control.
		- Examples:
			- store all sensitive files in a protected folder
			- create a compliance policies and procedures
			- train users on proper security policies
			- post a sign for authorized personnel only
	- Whats an example of a preventative technical control? 
		- Firewall
	- Whats an example of a deterrent technical control? 
		- Splash Screen
	- Whats an example of a detective technical solution 
		- System Logs
	- Whats an example of a corrective technical control 
		- Backup recovery
	- Whats an example of a compensating technical control 
		- Block instead of patch
	- Whats an example of a directive technical control 
		- file storage policies
	- Whats an example of a preventative managerial control 
		- on board policy
	- Whats an example of a deturent managerial control 
		- Demotion
	- Whats an example of a detective managerial control 
		- login reports
	- Whats an example of a corrective managerial control 
		- policies for reporting issues
	- Whats an example of a compensating managerial control 
		- Separation of duties (More people in a position to be checking each other)
	- Whats an example of directive managerial control? 
		- Compliance polices
	- Whats an example of a preventative operational control 
		- guard shack
	- Whats an example of a deterrent operational control 
		- reception desk
	- Whats an example of a detective operational control 
		- property patrols
	- Whats an example of a corrective operational control 
		- contact authorities
	- Whats an example of a compensating operational control 
		- require multiple staff security
	- Whats an example of a directive operational control 
		- security policy training
	- Whats an example of deterrent physical control 
		- warning signs
	- Whats an example of a detective physical control 
		- motion detectors
	- Whats an example of a corrective physical control 
		- fire extinguisher
	- Whats an example of a compensating physical control 
		- power generator
	- Whats an example of a directive phyiscal control 
		- Sign: Authorized personnel only
-
- # Video 1.2.1: CIA Triad
	- ![image.png](../assets/image_1735446570138_0.png){:height 120, :width 133}
	- Easy way to remember the fundamentals of security
	- Also Known as the AIC Triad
	- ### CIA Triad 
		- Confidentiality: We need to keep the information Hidden
		- Integrity: Messages cant be modified without being detected
		- Availability: Systems and networks must be up and running
	- ### Confidentiality 
		- Certain information should only be known to certain people.
		- Encryption helps us do this but giving a key to decrypt to a certain person.
		- Access Controls
			- Selectively restrict access and resources  to certain people.
		- Two Factor Authentication.
	- ### Integrity 
		- Data is stored and tresfered as intended
		- Hashing
		- Digital Signature
			- Takes a hash and encrypts it asymmetrically
		- Certificates
		- Non-repudiation
			- provides proof of integrity and origin.
	- ### Availability 
		- Always running
		- Fault tolerance
			- System will continue ti run even when failure occurs, redundant.
		- Patching
	- ### Non-repudiation 
		- refers to a security principle that ensures a party involved in a transaction or communication cannot later deny having participated in it
- # Video 1.2.2: AAA
	- AAA Framework 
		- Authentication 
			- Prove you are who you say, identification
		- Authorization 
			- Based on youre identification and authentificatio, what accsess do you have
		- Accounting 
			- Resources used, when you logged, the data sent and received, logout time.
	- AAA Examples 
		- client connects to a the internet and to a vpn, the firewall will ask for the user and pass and will send them to a AAA Server which actually verifies the user and passes them through the firewall if approved.
		- ![image.png](../assets/image_1735465309562_0.png){:height 180, :width 277}
	- Authenticate Devices
		- A computer needs to prove they are allowed to be on the network. We can do this with a certificate
		- CA 
			- A certificate authority digitally sighs a certificate with the organizations CA
			- This certificate can now be included as part of the authentication method
	- Authorize a device 
		- Now that we have authenticated a device or user, we now put them into groups these groups will have a set of permissions, this makes it easy to scale permissions
		- ![image.png](../assets/image_1735465925018_0.png){:height 191, :width 720}
		- Abstraction 
			- Adding something in the middle, a user goes with a group
- # Video 1.2.3: Gap analysis
	- ### gap analysis 
		- is the gap between where you are and where you want to be
	- Comparison
		- evaluate the existing systems
		- identify weaknesses in security or efficiency
	- ![image.png](../assets/image_1735466683118_0.png){:height 146, :width 262}
	-
- # Video 1.2.4: Zero Trust
	- ### Zero Trust 
		- Covers every device, every process, every person. Trust no one authenticate at every resource.
	- Split the network into functional planes
		- Applies physical, virtual, and cloud components
	- ### Data Plane 
		- process the frames, packets, and network data
			- Switches
			- Firewall
			- Router
		- processing, forwarding, trunking, encrypting, NAT
	- ### Control Plane 
		- Manages the actions of the data plane
		- settings polcies rules for what security a device needs to have
		- determines how packets sould be forwarded
		- routing tables, session tables, NAT tables
		- ![image.png](../assets/image_1735523542877_0.png){:height 234, :width 720}
	- ### Adaptive identity 
		- Based on the authentication data, like where the user is what role they play like ceo or regular employee and what data they are trying to access.
	- ### Threat scope reduction 
		- reducing the entry points into a network
	- ### Policy-driven access control 
		- combine adaptive identity and a predefined set of rules based on the adaptive identity data.
	- ### PEP 
		- Policy Enforcement Point
		- This is the point where users and devices will be evaluated and data will be collected. It does now enforce any security measures, it passes this information to the PDP.
	- ### PDP 
		- Policy Decision Point
		- This takes the data from the PEP and enforces a set of predefined security measures.
		- ![image.png](../assets/image_1735524170821_0.png){:height 232, :width 410}
	- ### Policy Engine 
		- Evaulutaes each access decision based on policy and other information sources
		- Grant, Deny, or Revoke
	- ### Policy Administrator 
		- communicates with the polocy Enforcement Point
		- Generates access tokens or credentials
		- Tells the PEP to allow or disallow access

-
- # Video 1.2.5: Physical Security
	- ### Barricades or Bollards
		- Channel people through a specific access point only allow people and prevent cars and trucks
	- ### Access control vestibules
		- Air lock, One at a time.
	- ### Fence
		- Build a perimeter see through or not
	- ### CCTV
		- Replaces physical Guards
		- Closed Circuit Television
	- ### Security Gaurd
		- Physical protection at the reception or permemter
	- ### ID
		- This I a identification
	- ### Light
		- More security will illuminate the persons face
		- Avoid Shadow and glares
	- ### Inferred
		- Detects infered radiation in both light and dark
		- Common in motion detectors
	- ### Microwave
		- For more area motion detection
- # Video 1.2.6: Deception and Disruption
	- ### Honey Pot 
		- attract bad guys are trap them
		- This will allow you to see what they are trying to attack and how
	- ### Honey Nets
		- a network of honeypots
		- more believable
	- ### Honey Files 
		- These are files that have fake infomration
		- You can even add traceable information and track what and where the attacker uses this fake information
	- ### Honey Tokens 
		- fake AP I tokens where you can trace where they are used
	- ### Honey Emails 
		- Fake Email addresses
- # Video 1.2.7: Non-repudiation
	- ### Proof of integrity 
		- Make sure the data does not change
		- often a hash is used
		- A hash is often compared to a fingerprint
		- Hash does not say who sent the data
	- ### Proof of origin 
		- Verify who sent the data
		- authentication
		- ### Digital signature 
			- This is a private key where only the sender knows, it can be verified with a public key.

- # Video 1.3.1: Change Management
	- A formal process for changing stuff
		- Things need to stay updated
		- But their is risk in updating computers, so you need to balance the risk
			- If a company is busy at a certain time maybe don't make the change then
			- This would be called finding a good maintenance window
	- ### Impact analysis 
		- Risk is high medium or low
	- ### Back-out Plan 
		- How to revert change if it goes bad
	- ### SOP 
		- Standard Operating Procedure
- # Video 1.4.1 Public Key Infrastructure
	- ### PKI 
		- Public Key Infrastructure
		- Broad term
		- Polices that help create distribute manage revoke and store digital certificates
		- Lots of planning and decision
		- CA is used in this process
	- ### Symmetric encryption 
		- same key that was used for encrypting is used for decryption
		- secrete key algorithm
		- very fast
	- ### Asymmetric encryption 
		- public and private keys
		- slower
	- ### Key Pair 
		- lots of randomization
		- large prime numbers
		- lots of math

	- ### Key escrow 
		- someone else holds your decryption keys
		- a 3rd party or you are locally managing all these keys
- # Video 1.4.2 Encrypting data
	- ### Data at rest 
		- the data on a hard drive
	- ### EFS 
		- Encrytping file system
		- windows version of encrypting drives and folders
	- ### Transparent encryption 
		- Encrypt all database information with a symmetric key
	- ### Record level encryption 
		- encrypt indavidual columns
		- use a separate symmetric key for each column
	- ### Symmetric encryption length 
		- normally 128-bit
	- ### Key stretching 
		- encrypt data multiple times with different keys
- # Video 1.4.3 key exchange
	- ### out of band key exchange
		- not using the internet to transfer the key
	- ### In band key exchange
		- sent across the network
		- use asymmetric encryption to send a symmetrical key
	- ### Session key
		- a temporary key that can be discarded
	- ### Symmetric keys from private cryptography

	- algorithmic that creates a symmetric key from two parties existing private and public keys
- # Video 1.4.4 Encryption Technologies
	- ### TPM 
		- Trusted platform module
		- random number generator, key generator
		- unique keys burned in during manufacturing
		- storage keys, hardware config information
		- securely store bit-locker keys
		- password protected
	- ### HSM 
		- harware security module
		- used in large enviorments
		- securely store thousands of encryption keys
		- centralized TPM for multiple devices
	- ### Key management system 
		- create and manage keys for things like ssl tls ssh etc
		- see logs of keys being used in a central location
	- ### Secure enclave 
		- a seperate proccesor thats for encrpytion
		- has its own rom and monitors boot processor
		- popular in phones
- # Video 1.4.5 Obfuscation
	- ### Obfuscation 
		- the process of making something unclear
		- developer making code very hard to read
	- ### Stenography 
		- hiding information within an image
		- it can also be in any cover data
			- network packets
			- audio
			- video
		- if you know how it was stored you can easily extract the data
	- ### Tokenization 
		- replace sensitive data with a token
		- like a social security number can be stored as another number and transferred across the network
		- its not mathematically related not a form of encryption

- # Video 1.4.6 Hashing and Digital Signatures
	- ### Hash 
		- represent data as a short string of text
		- not an encrpytion you cant get the data back
		- also known as a message digest or finger print
	- ### SHA256 hash 
		- 256 bits/ 64 hexadecimal characters
	- ### MD5 
		- has a collision issue don't use
	- ### Password Storage 
		- is stored as a salted hash
	- ### Salt 
		- random data added to a password when hashing
		- every user gets their own random salt
		- rainbow tables wont work with salted hashes
	-
- # Video 1.4.7 Block Chains
	- ### Block Chain 
		- A large amount of computers keeping track of eahcothers data if data is changed on one only then the others will correct or detect avoiding fraud
		- Examples:
			- Banks
			- Crypto
			- voting
- # Video 1.4.8 Certificate
	- ### Digital Certificate
		- provides trust to a device or user
		- PKI use CAs for additional trust
		- Web of trust is where other CAs all authorize people
	- ### X.509
		- The standard for digital certificates
		- Serial number
		- version
		- signature algorithm
		- issuer
		- Public key
		- extensions
	- ### Root of Trust 
		- the base level trust
		- Examples
			- HSM of a computer
			- CA for a website and browser will have a list of trusted certificate authoritaties
	- ### CSR 
		- Certificate sighing request
		- Created from a public and private key and the CA will sign it with their private key and give it back
		- ![image.png](../assets/image_1735896256057_0.png){:height 220, :width 313}
		- ### OCSP stapling
			- Online certificates statues protocol
			- Provinces scalability of OSCP
	- ### CRL 
		- Certificate Revocation List
		- Maintained by the CA
		- Is a large file of revoked certificates
