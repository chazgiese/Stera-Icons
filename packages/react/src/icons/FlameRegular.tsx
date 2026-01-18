import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlameRegularProps = Omit<IconBaseProps, 'children'>;

const FlameRegular = memo(
  forwardRef<SVGSVGElement, FlameRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="m12 1.25.11.01h.02l.06.02a1 1 0 0 1 .25.12l.03.02.03.02.07.06a22 22 0 0 1 1.19 1.05c.76.71 1.78 1.71 2.8 2.9a23 23 0 0 1 2.85 4c.78 1.44 1.34 3 1.34 4.55a8.75 8.75 0 0 1-17.5 0c0-1.55.56-3.11 1.34-4.55a23 23 0 0 1 2.84-4 37 37 0 0 1 4-3.95l.07-.06.02-.02.04-.02.05-.04.06-.03.14-.05.06-.02h.01zm-.02 12.3c-.3.3-.72.75-1.14 1.29-.85 1.1-1.59 2.42-1.59 3.66 0 1.02.4 1.69.91 2.1a3 3 0 0 0 3.68 0c.51-.41.91-1.08.91-2.1 0-1.24-.74-2.57-1.6-3.66-.4-.54-.82-.98-1.13-1.3l-.02-.01zm-.72-9.9c-.74.68-1.72 1.65-2.7 2.78a22 22 0 0 0-2.65 3.73A8 8 0 0 0 4.75 14c0 2.53 1.3 4.75 3.25 6.05a5 5 0 0 1-.25-1.55c0-1.76 1.01-3.43 1.9-4.59a16 16 0 0 1 1.85-1.97h.01c.28-.25.7-.25.98 0h.01l.16.14a14 14 0 0 1 1.68 1.83c.9 1.16 1.91 2.83 1.91 4.59q-.01.87-.26 1.55A7.2 7.2 0 0 0 19.25 14a8 8 0 0 0-1.16-3.84 22 22 0 0 0-2.66-3.73A36 36 0 0 0 12 2.99z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlameRegular.displayName = 'FlameRegular';

export { FlameRegular };
export type { FlameRegularProps };
