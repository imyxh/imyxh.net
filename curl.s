.att_syntax
.global _start

.text

_start:
	leaq 27(%rip), %rdi; leaq 10(%rdi), %rax; pushq $0; pushq %rax; pushq %rdi;
	movq %rsp, %rsi; movq $0, %rdx; movq $59, %rax;
	syscall; .asciz "/bin/curl\0https://imyxh.net";

