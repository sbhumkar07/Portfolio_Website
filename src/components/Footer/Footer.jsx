const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-4">
      <p className="text-center text-sm text-neutral-500">
        &copy; {new Date().getFullYear()} Sarvesh Bhumkar.
      </p>
    </footer>
  );
};

export default Footer;
