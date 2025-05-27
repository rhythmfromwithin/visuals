// 画作数据文件 - artworks.js
// 请将此文件保存为 artworks.js 并放在你的 GitHub 仓库根目录

const artworksData = [
    // 示例数据 - 你需要替换为你自己的画作信息
    {
        id: 1,
        title: "山水之间",
        description: "这幅作品展现了中国传统山水画的意境，通过层叠的山峦和流水的变化，表达了自然的和谐与永恒。墨色浓淡相宜，构图疏密有致，体现了传统文人画的审美追求。",
        image: "images/mountain_landscape_thumb.jpg",  // GitHub 仓库中的缩略图路径
        fullImage: "https://live.staticflickr.com/65535/your-flickr-photo-id.jpg", // Flickr 完整图片链接
        category: "山水",
        date: "2024-03-15",
        medium: "水墨纸本", // 可选：画作材质
        size: "68×45cm"     // 可选：画作尺寸
    },
    {
        id: 2,
        title: "春风拂面",
        description: "春天的花朵盛开，微风吹过，表达了生命力的勃发和春天的美好。这幅作品采用了淡彩技法，力求表现轻盈的质感，色彩清新淡雅。",
        image: "images/spring_flowers_thumb.jpg",
        fullImage: "https://live.staticflickr.com/65535/your-flickr-photo-id-2.jpg",
        category: "花鸟",
        date: "2024-04-20",
        medium: "工笔彩墨",
        size: "50×40cm"
    },
    {
        id: 3,
        title: "静物组合",
        description: "这组静物描绘了日常生活中的物品，通过光影的变化和色彩的对比，赋予普通物品以不同的情感和氛围。重点表现了物体的质感和空间关系。",
        image: "images/still_life_thumb.jpg",
        fullImage: "https://live.staticflickr.com/65535/your-flickr-photo-id-3.jpg",
        category: "静物",
        date: "2024-05-10",
        medium: "油画",
        size: "60×50cm"
    }
    // 继续添加更多画作...
    // 你可以复制上面的格式，为每一幅画作创建一个对象
];

// 注意事项：
// 1. 每个画作对象必须有唯一的 id
// 2. image 字段指向 GitHub 仓库中的缩略图（建议大小 500px 宽左右）
// 3. fullImage 字段指向 Flickr 上的高分辨率图片
// 4. 所有字段中的引号和特殊字符需要正确转义
// 5. date 格式为 YYYY-MM-DD
// 6. category 建议使用统一的分类名称（山水、花鸟、人物、静物等）

// 如何获取 Flickr 图片链接：
// 1. 在 Flickr 上打开你的照片
// 2. 右键点击图片选择"在新标签页中打开图片"
// 3. 复制该链接地址即可