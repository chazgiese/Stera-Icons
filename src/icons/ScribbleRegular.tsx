import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScribbleRegularProps = Omit<IconBaseProps, 'children'>;

const ScribbleRegular = memo(
  forwardRef<SVGSVGElement, ScribbleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="scribble" {...props}>
      <path fill="currentColor" d="M9.59 2.27a.77.77 0 0 1 .96.7l-.01.21q-.05.26-.17.52c-.16.38-.47 1.02-1.01 2.06C8.8 6.82 8 8.31 7.33 9.7l-.68 1.42c.47-.41.98-.9 1.5-1.36a44 44 0 0 1 3.7-3q.68-.5 1.13-.76.43-.26.71-.37l.07-.02a.8.8 0 0 1 .82.31.8.8 0 0 1 .13.52q-.02.23-.08.36l-.3.72c-.27.57-.66 1.36-1.1 2.21-.6 1.22-1.2 3.66-1.9 6.97l-.11.57 1.18-1.38c1.57-1.92 4.12-5.14 5.59-6.96.85-1.06 1.4-1.7 1.8-2.09q.27-.29.51-.45c.16-.1.37-.2.62-.22h.1a.8.8 0 0 1 .61.4c.1.18.12.36.12.44q-.01.27-.08.6c-.1.45-.33 1.2-.75 2.41-.84 2.48-2.5 6.96-3.23 9.22l-.08.26a.75.75 0 0 1 .46 1.33l-.86.68-.15.1a1 1 0 0 1-.36.14.8.8 0 0 1-.78-.31 1 1 0 0 1-.17-.54q0-.34.12-.8t.4-1.32c.72-2.25 2.42-6.86 3.23-9.24l.05-.16-.4.5c-1.44 1.78-4.02 5.04-5.6 6.96a30 30 0 0 1-1.75 2.01q-.3.3-.59.49c-.17.1-.52.27-.92.12-.39-.15-.54-.5-.6-.69a2 2 0 0 1-.07-.66q.02-.68.24-1.72c.68-3.24 1.32-5.9 2.04-7.33l.37-.76q-1.23.9-3.11 2.57c-.8.72-1.72 1.6-2.39 2.13q-.26.2-.5.36t-.55.25c-.2.05-.67.1-.98-.33a1.1 1.1 0 0 1-.16-.83c.06-.39.26-.92.5-1.47q.37-.88.9-1.95c.7-1.4 1.5-2.91 2.05-3.95l.23-.45q-.54.32-1.14.72a66 66 0 0 0-3.67 2.55.75.75 0 0 1-.9-1.2 67 67 0 0 1 5.63-3.77c.52-.3 1.04-.56 1.4-.65" />
    </IconBase>
  ))
);

ScribbleRegular.displayName = 'ScribbleRegular';

// Triple export pattern (lucide-react style)
export { ScribbleRegular, ScribbleRegular as ScribbleRegularIcon, ScribbleRegular as SiScribbleRegular };
export type { ScribbleRegularProps };
