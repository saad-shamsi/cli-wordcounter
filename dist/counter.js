export async function countWords(_, input = "") {
    const words = input.split('')[0] === '' ? 0 : input.trim().split(' ').length;
    const characters = input.replace(/\s+/g, " ").length;
    return new Promise((res) => res([` In Yor pargraph you used ${words} words and ${characters} characters `]));
}
//# sourceMappingURL=counter.js.map