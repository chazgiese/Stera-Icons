import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandbagRegularProps = Omit<IconBaseProps, 'children'>;

const HandbagRegular = memo(
  forwardRef<SVGSVGElement, HandbagRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="handbag" {...props}>
      <path fillRule="evenodd" d="M12 3.75c2.35 0 4.25 1.9 4.25 4.25v.78q.66.04 1.19.25.91.4 1.53 1.18c.48.62.69 1.44 1.01 2.64l.11.4c.27 1.02.5 1.83.61 2.49.12.66.15 1.25-.02 1.82a3.8 3.8 0 0 1-1.64 2.14c-.5.3-1.08.43-1.75.5q-.99.06-2.56.05H9.27q-1.57.02-2.56-.06a4 4 0 0 1-1.75-.5 3.8 3.8 0 0 1-1.64-2.13 4 4 0 0 1-.02-1.82q.2-.97.61-2.49l.1-.4c.33-1.2.54-2.02 1.02-2.64q.62-.79 1.53-1.18.53-.2 1.19-.25V8c0-2.35 1.9-4.25 4.25-4.25m-2.62 6.5c-1.39 0-1.86.01-2.24.17q-.56.24-.93.7c-.25.33-.38.79-.74 2.12l-.11.4A31 31 0 0 0 4.78 16c-.1.57-.1.9-.02 1.14.16.53.5.99.98 1.28.22.13.53.23 1.1.28.59.05 1.35.05 2.43.05h5.46c1.08 0 1.84 0 2.42-.05a2.5 2.5 0 0 0 1.11-.28q.72-.47.98-1.28a2.5 2.5 0 0 0-.02-1.14c-.1-.58-.3-1.31-.58-2.36l-.1-.4c-.37-1.33-.5-1.79-.75-2.11a2 2 0 0 0-.93-.7c-.38-.17-.85-.18-2.24-.18zm2.62-5A2.75 2.75 0 0 0 9.25 8v.75h5.5V8A2.75 2.75 0 0 0 12 5.25" clipRule="evenodd" />
    </IconBase>
  ))
);

HandbagRegular.displayName = 'HandbagRegular';

// Triple export pattern (lucide-react style)
export { HandbagRegular, HandbagRegular as HandbagRegularIcon, HandbagRegular as SiHandbagRegular };
export default HandbagRegular;
export type { HandbagRegularProps };
