type WelcomeSectionProps = {
  title: string;
  subtitle?: string; 
};

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
      {subtitle && <p className="text-lg md:text-xl max-w-2xl">{subtitle}</p>}
    </section>
  );
};

export default WelcomeSection;