import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandbagRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandbagRegularDuotone = memo(
  forwardRef<SVGSVGElement, HandbagRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="handbag-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.62 8.75c1.25 0 2.1-.01 2.82.28q.91.4 1.53 1.18c.48.62.69 1.44 1.01 2.64l.11.4c.27 1.02.5 1.83.61 2.49.12.66.15 1.25-.02 1.82a3.8 3.8 0 0 1-1.64 2.14c-.5.3-1.08.43-1.75.5q-.99.06-2.56.05H9.27q-1.57.01-2.56-.06a4 4 0 0 1-1.75-.5 3.8 3.8 0 0 1-1.64-2.13 4 4 0 0 1-.02-1.82q.2-.98.61-2.49l.1-.4c.33-1.2.54-2.02 1.02-2.64q.62-.79 1.53-1.18c.73-.3 1.57-.28 2.82-.28zm-5.24 1.5c-1.39 0-1.86.01-2.24.17q-.56.24-.93.7c-.25.33-.38.79-.74 2.12l-.11.4A31 31 0 0 0 4.78 16c-.1.57-.1.9-.02 1.14.16.53.5.99.98 1.28.22.13.53.23 1.1.28.59.05 1.35.05 2.43.05h5.46c1.08 0 1.84 0 2.42-.05a2.5 2.5 0 0 0 1.11-.28q.72-.47.98-1.28a2.5 2.5 0 0 0-.02-1.14c-.1-.58-.3-1.31-.58-2.36l-.1-.4c-.37-1.33-.5-1.79-.75-2.11a2 2 0 0 0-.93-.7c-.38-.17-.85-.18-2.24-.18z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 3.75c2.35 0 4.25 1.9 4.25 4.25v.78q-.64-.04-1.5-.03V8a2.75 2.75 0 1 0-5.5 0v.75q-.86 0-1.5.03V8c0-2.35 1.9-4.25 4.25-4.25" />
    </IconBase>
  ))
);

HandbagRegularDuotone.displayName = 'HandbagRegularDuotone';

// Triple export pattern (lucide-react style)
export { HandbagRegularDuotone, HandbagRegularDuotone as HandbagRegularDuotoneIcon, HandbagRegularDuotone as SiHandbagRegularDuotone };
export default HandbagRegularDuotone;
export type { HandbagRegularDuotoneProps };
