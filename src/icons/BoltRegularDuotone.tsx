import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoltRegularDuotone = memo(
  forwardRef<SVGSVGElement, BoltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bolt-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.91 2.25c1.26 0 2.05 0 2.78.22q.95.3 1.68.95c.58.5.98 1.18 1.64 2.25l1.6 2.6c.7 1.17 1.16 1.9 1.34 2.7q.22 1.03 0 2.06c-.18.8-.64 1.53-1.35 2.7l-1.59 2.6c-.66 1.07-1.06 1.76-1.64 2.25q-.74.65-1.68.95c-.73.23-1.52.22-2.78.22H10.1c-1.26 0-2.05 0-2.78-.22q-.95-.3-1.68-.95c-.58-.5-.98-1.18-1.64-2.25l-1.59-2.6c-.71-1.17-1.17-1.9-1.35-2.7a5 5 0 0 1 0-2.06c.18-.8.64-1.53 1.35-2.7l1.59-2.6c.66-1.07 1.06-1.76 1.64-2.25a5 5 0 0 1 1.68-.95c.73-.23 1.52-.22 2.78-.22zm-3.82 1.5c-1.36 0-1.88 0-2.33.15q-.64.21-1.15.65c-.36.3-.63.75-1.34 1.9l-1.59 2.6c-.77 1.26-1.05 1.75-1.16 2.24q-.15.71 0 1.42c.1.5.4.98 1.16 2.24l1.59 2.6c.7 1.15.98 1.6 1.34 1.9q.51.45 1.15.65c.45.14.97.15 2.33.15h3.82c1.36 0 1.88 0 2.33-.15q.63-.21 1.15-.65a8 8 0 0 0 1.34-1.9l1.6-2.6c.76-1.26 1.04-1.75 1.15-2.24q.15-.71 0-1.42c-.1-.5-.4-.98-1.16-2.24l-1.59-2.6a8 8 0 0 0-1.34-1.9q-.52-.45-1.15-.65a8 8 0 0 0-2.33-.15z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

BoltRegularDuotone.displayName = 'BoltRegularDuotone';

// Triple export pattern (lucide-react style)
export { BoltRegularDuotone, BoltRegularDuotone as BoltRegularDuotoneIcon, BoltRegularDuotone as SiBoltRegularDuotone };
export default BoltRegularDuotone;
export type { BoltRegularDuotoneProps };
