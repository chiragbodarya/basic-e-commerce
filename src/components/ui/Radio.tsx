import React from 'react';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  label?: string;
  options: RadioOption[];
  error?: string;
  value?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, options, error, className = '', value, ...props }, ref) => {
    return (
      <div className="w-full space-y-2.5">
        {label && (
          <label className="block text-14/18 font-bold text-slate-800 tracking-tight">
            {label}
          </label>
        )}
        <div className="flex flex-wrap gap-6">
          {options.map((opt) => (
            <label key={opt.value} className="relative flex items-center group cursor-pointer">
              <input
                type="radio"
                ref={ref}
                value={opt.value}
                checked={value === opt.value}
                className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 transition-all checked:border-primary checked:bg-primary hover:border-primary focus:outline-none"
                {...props}
              />
              <span className="absolute left-1.5 h-2 w-2 rounded-full bg-white opacity-0 transition-opacity peer-checked:opacity-100" />
              <span className="ml-2.5 text-14/18 font-medium text-slate-600 group-hover:text-primary transition-colors">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
        {error && <p className="text-12/16 font-medium text-red-500">{error}</p>}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
