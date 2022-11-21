
export function Footer({ title = "" }) {
    return (
      <footer>
        <a
          href="https://www.framer.com/docs/scroll-animations/"
          target="_blank"
          rel="noreferrer"
        >
          <code>{title}</code>
        </a>
      </footer>
    );
}