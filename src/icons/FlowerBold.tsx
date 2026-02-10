import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowerBoldProps = Omit<IconBaseProps, 'children'>;

const FlowerBold = memo(
  forwardRef<SVGSVGElement, FlowerBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flower-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.73 3.86A3.7 3.7 0 0 1 17 3.53a3.5 3.5 0 0 1 1.85 3.81q-.09.5-.3.96.53.05 1.02.23A3.55 3.55 0 0 1 22 12c0 1.8-1.08 2.98-2.44 3.47q-.5.18-1.01.23.2.47.29.96a3.5 3.5 0 0 1-1.85 3.81 3.7 3.7 0 0 1-4.26-.33 5 5 0 0 1-.73-.77q-.33.42-.73.77a3.7 3.7 0 0 1-4.26.33 3.5 3.5 0 0 1-1.85-3.81q.09-.5.3-.96a5 5 0 0 1-1.02-.23A3.55 3.55 0 0 1 2 12c0-1.8 1.08-2.98 2.44-3.47q.5-.17 1.01-.23-.2-.46-.29-.96a3.5 3.5 0 0 1 1.85-3.81 3.7 3.7 0 0 1 4.26.33q.4.34.73.77.33-.44.73-.77M8.6 15.06a3 3 0 0 0-1.46 1.95c-.12.65.08 1.28.86 1.72.79.44 1.47.3 2.01-.14.59-.48 1-1.33 1-2.2a4.5 4.5 0 0 1-2.33-1.37zm6.74-.04A4.5 4.5 0 0 1 13 16.4c0 .87.41 1.72 1 2.2.54.44 1.22.58 2.01.14s.98-1.07.86-1.72a3 3 0 0 0-1.46-1.94zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m-4.54 1.1a3.1 3.1 0 0 0-2.35-.19c-.67.24-1.11.74-1.11 1.6 0 .84.44 1.34 1.11 1.57.73.26 1.7.19 2.5-.26l.08-.04a4.5 4.5 0 0 1 0-2.56l-.08-.05zm11.43-.19a3.1 3.1 0 0 0-2.5.26l-.08.05a4.5 4.5 0 0 1 0 2.56l.08.05.15.07c.76.38 1.66.43 2.35.18A1.55 1.55 0 0 0 20 12c0-.85-.44-1.35-1.11-1.59m-8.89-5c-.54-.44-1.22-.58-2-.14-.8.44-.99 1.07-.87 1.72.13.72.67 1.5 1.46 1.94l.08.05A4.5 4.5 0 0 1 11 7.6v-.17a3 3 0 0 0-1-2.03m6.01-.14c-.79-.44-1.47-.3-2.01.14a3 3 0 0 0-1 2.2c.91.2 1.72.7 2.33 1.37l.08-.05A3 3 0 0 0 16.87 7c.12-.65-.08-1.28-.86-1.72" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowerBold.displayName = 'FlowerBold';

// Triple export pattern (lucide-react style)
export { FlowerBold, FlowerBold as FlowerBoldIcon, FlowerBold as SiFlowerBold };
export default FlowerBold;
export type { FlowerBoldProps };
