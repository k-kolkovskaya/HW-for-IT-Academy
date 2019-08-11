export default function log(name, before, after, comments = '') {
  console.log(
    `${name} begin: ${before.toString().substring(8, 13)} end: ${after
      .toString()
      .substring(8, 13)}; difference: ${after - before}; ${comments}`
  );
}

