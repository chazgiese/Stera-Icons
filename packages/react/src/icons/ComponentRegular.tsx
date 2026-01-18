import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ComponentRegularProps = Omit<IconBaseProps, 'children'>;

const ComponentRegular = memo(
  forwardRef<SVGSVGElement, ComponentRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.76 14.18c.69-.69 1.8-.69 2.48 0l2.58 2.58c.69.69.69 1.8 0 2.48l-2.58 2.58c-.69.69-1.8.69-2.48 0l-2.58-2.58a1.75 1.75 0 0 1 0-2.48zm1.42 1.06a.25.25 0 0 0-.36 0l-2.58 2.58c-.1.1-.1.26 0 .36l2.58 2.58c.1.1.26.1.36 0l2.58-2.58c.1-.1.1-.26 0-.36zM4.76 8.18c.69-.69 1.8-.69 2.48 0l2.58 2.58c.69.69.69 1.8 0 2.48l-2.58 2.58c-.69.69-1.8.69-2.48 0l-2.58-2.58a1.75 1.75 0 0 1 0-2.48zm1.42 1.06a.25.25 0 0 0-.36 0l-2.58 2.58c-.1.1-.1.26 0 .36l2.58 2.58c.1.1.26.1.36 0l2.58-2.58c.1-.1.1-.26 0-.36zM16.76 8.18c.69-.69 1.8-.69 2.48 0l2.58 2.58c.69.69.69 1.8 0 2.48l-2.58 2.58c-.69.69-1.8.69-2.48 0l-2.58-2.58a1.75 1.75 0 0 1 0-2.48zm1.42 1.06a.25.25 0 0 0-.36 0l-2.58 2.58c-.1.1-.1.26 0 .36l2.58 2.58c.1.1.26.1.36 0l2.58-2.58c.1-.1.1-.26 0-.36zM10.76 2.18c.69-.69 1.8-.69 2.48 0l2.58 2.58c.69.69.69 1.8 0 2.48l-2.58 2.58c-.69.69-1.8.69-2.48 0L8.18 7.24a1.75 1.75 0 0 1 0-2.48zm1.42 1.06a.25.25 0 0 0-.36 0L9.24 5.82c-.1.1-.1.26 0 .36l2.58 2.58c.1.1.26.1.36 0l2.58-2.58c.1-.1.1-.26 0-.36z" clipRule="evenodd" />
    </IconBase>
  ))
);

ComponentRegular.displayName = 'ComponentRegular';

export { ComponentRegular };
export type { ComponentRegularProps };
