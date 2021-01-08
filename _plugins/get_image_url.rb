# Credit: https://stackoverflow.com/questions/25802204/jekyll-filter-for-regex-substitution-in-content

module Jekyll
    module GetImageUrlFilter
        def get_image_url(input)
    
            # This will be returned
            
            (/<img [\s\S]*?src=(["'])([\s\S]*?)\1/.match(input) || ["","",""])[2]
        end
    end
end
  
Liquid::Template.register_filter(Jekyll::GetImageUrlFilter)